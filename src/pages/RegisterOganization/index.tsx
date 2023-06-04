import { useForm } from 'react-hook-form'
import Logo from '../../assets/icons/logo.svg'
import Dogs from '../../assets/images/dogs.png'
import { AddressMap, BannerPets, Container, FormContainer } from './style'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/api/api'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useEffect, useState } from 'react'

interface organizationType {
  name: string
  email: string
  cep: string
  address: string
  whatsappNumber: string
  password: string
  passwordConfirm: string
}

interface coordinatesType {
  latitude: number
  longitude: number
}

const newOrganizationValidationSchema = zod
  .object({
    name: zod.string({ required_error: 'nome obrigatório' }),
    email: zod.string({ required_error: 'email obrigatório' }).email({
      message: 'endereço de email invalido',
    }),
    cep: zod
      .string({ required_error: 'cep obrigatório' })
      .max(8, { message: 'cep deve ter 8 digitos' }),
    address: zod.string({ required_error: 'endereço é obrigatório' }),
    whatsappNumber: zod.string({ required_error: 'whatsapp é obrigatório' }),
    password: zod
      .string({ required_error: 'senha é obrigatório' })
      .min(6, { message: 'deve ter no minimo 6 digitos' }),
    passwordConfirm: zod
      .string({ required_error: 'confirme a senha' })
      .min(6, { message: 'deve ter no minimo 6 digitos' }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'escreva a mesma senha no campo confirme',
    path: ['confirm'],
  })

type newOrganizationFormData = zod.infer<typeof newOrganizationValidationSchema>

export function RegisterOrganization() {
  const { register, handleSubmit, formState, reset } =
    useForm<newOrganizationFormData>({
      resolver: zodResolver(newOrganizationValidationSchema),
    })

  function FormatCep(cep: string) {
    const cepFormated = `${cep.slice(0, 5)}-${cep.slice(-3)}`
    return cepFormated
  }

  async function HandleCreateNewOrganization(data: organizationType) {
    const newOrganization = {
      ...data,
      whatsappNumber: `+55${data.whatsappNumber}`,
      cep: FormatCep(data.cep),
    }

    try {
      const resp = await api.post('/orgs', newOrganization)
      if (resp.status === 201) {
        console.log('criado com sucesso')
        console.log(resp.statusText)
        reset()
      }
    } catch (error: any) {
      console.log(error.response.data.error)
      console.log(error.response.data.status)
    }
  }

  const [coordinates, setCoordinates] = useState<coordinatesType>(
    {} as coordinatesType,
  )

  function SearchForCoordinates(cep: string) {
    if (cep.length !== 8) {
      return
    }
    const cepFormated = FormatCep(cep)

    try {
      api.get(`/location/coordinates/${cepFormated}`).then((response) => {
        const coordinatesInNumber = {
          latitude: Number(response.data.coordinates.latitude),
          longitude: Number(response.data.coordinates.longitude),
        }

        setCoordinates(coordinatesInNumber)
      })
    } catch (Error: any) {
      console.log(Error.response.data.error)
    }
  }

  return (
    <Container>
      <BannerPets>
        <div className="container-logo">
          <img src={Logo} className="logo" alt="" />
          <h1>FindAFriend</h1>
        </div>
        <img src={Dogs} alt="" />
      </BannerPets>

      <FormContainer>
        <h1>Cadastre sua organização</h1>

        <form onSubmit={handleSubmit(HandleCreateNewOrganization)}>
          <div className="item-input">
            <label htmlFor="name">Nome</label>
            <input {...register('name')} type="text" name="name" />
          </div>
          <div className="item-input">
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="text" name="email" />
          </div>

          <div className="item-input">
            <label htmlFor="address">Endereço</label>
            <input {...register('address')} type="text" name="address" />
          </div>

          <div className="item-input">
            <label htmlFor="cep">CEP</label>
            <input
              {...register('cep')}
              onChange={(e) => SearchForCoordinates(e.target.value)}
              placeholder="12345123"
              type="number"
              name="cep"
            />
          </div>

          <AddressMap>
            {coordinates.latitude && (
              <MapContainer
                center={[coordinates.latitude, coordinates.longitude]}
                zoom={13}
                scrollWheelZoom={false}
                className="map-container"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={[coordinates.latitude, coordinates.longitude]}
                >
                  <Popup>localização do seu endereço</Popup>
                </Marker>
              </MapContainer>
            )}
          </AddressMap>

          <div className="item-input">
            <label htmlFor="whatsappNumber">whatsapp</label>
            <input
              {...register('whatsappNumber')}
              type="number"
              name="whatsappNumber"
            />
          </div>
          <div className="item-input">
            <label htmlFor="password">senha</label>
            <input {...register('password')} type="password" name="password" />
          </div>
          <div className="item-input">
            <label htmlFor="passwordConfirm">confirmar senha</label>
            <input
              {...register('passwordConfirm')}
              type="password"
              name="passwordConfirm"
            />
          </div>

          <button>Cadastrar</button>

          <div className="link">
            <a href="/home" target="_blank">
              já possui uma conta?
            </a>
          </div>
        </form>
      </FormContainer>
    </Container>
  )
}
