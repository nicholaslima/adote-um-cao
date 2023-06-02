import { useForm } from 'react-hook-form'
import Logo from '../../assets/icons/logo.svg'
import Dogs from '../../assets/images/dogs.png'
import { BannerPets, Container, FormContainer } from './style'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/api/api'

interface organizationType {
  name: string
  email: string
  cep: string
  address: string
  whatsappNumber: string
  password: string
  passwordConfirm: string
}

const newOrganizationValidationSchema = zod
  .object({
    name: zod.string({ required_error: 'nome obrigatório' }),
    email: zod.string({ required_error: 'email obrigatório' }).email({
      message: 'endereço de email invalido',
    }),
    cep: zod
      .string({ required_error: 'cep obrigatório' })
      .length(8, { message: 'cep deve ter 8 digitos' }),
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

  console.log(formState.errors)

  async function HandleCreateNewOrganization(data: organizationType) {
    const newOrganization = {
      ...data,
      whatsappNumber: `+55${data.whatsappNumber}`,
      cep: `${data.cep.slice(0, 5)}-${data.cep.slice(-3)}`,
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
            <label htmlFor="name">nome</label>
            <input {...register('name')} type="text" name="name" />
          </div>
          <div className="item-input">
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="text" name="email" />
          </div>
          <div className="item-input">
            <label htmlFor="cep">CEP</label>
            <input {...register('cep')} type="number" name="cep" />
          </div>
          <div className="item-input">
            <label htmlFor="address">Endereço</label>
            <input {...register('address')} type="text" name="address" />
          </div>

          <div className="map"></div>

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
