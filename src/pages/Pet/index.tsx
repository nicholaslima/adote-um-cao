import {
  ButtonContact,
  Container,
  ContainerDogDetails,
  DescDog,
  DogImages,
  Location,
  Map,
  Requirements,
} from './styles'
import Logo from '../../assets/icons/logo.svg'
import { AiOutlineArrowLeft, AiOutlineExclamationCircle } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'

import Dog2 from '../../assets/images/dog2.png'
import { RiWhatsappFill, RiWhatsappLine } from 'react-icons/ri'
import { SlEnergy } from 'react-icons/sl'
import { TbMaximize } from 'react-icons/tb'
import { FaEllipsisH } from 'react-icons/fa'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { api } from '@/api/api'
import { PetType } from '@/contexts'

interface OrgType {
  id: string
  nome: string
  address: string
  cep: string
  whatsappNumber: string
}

interface photoPetType {
  id: string
  image: string
  petId: string
  photo_url: string
}
export function Pet() {
  const [pet, setPet] = useState<PetType>()
  const [org, setOrg] = useState<OrgType>()
  const [photos, setPhotos] = useState<photoPetType[]>()
  const navigate = useNavigate()
  const location = useLocation()
  const petId = location.state?.petId

  function handleGoBack() {
    navigate('/map')
  }

  useEffect(() => {
    api.get(`/pets/show/${petId}`).then((response) => {
      setPet(response.data.pet)
      setOrg(response.data.pet.org)
    })
  }, [petId])

  useEffect(() => {
    api.get(`/pets/gallery/${petId}`).then((response) => {
      setPhotos(response.data.pet_gallery)
    })
  }, [petId])

  return (
    <Container>
      <aside>
        <img src={Logo} alt="logo dog face" />
        <button onClick={handleGoBack}>
          <AiOutlineArrowLeft />
        </button>
      </aside>
      <h1 className="title">Seu novo amigo</h1>
      <main>
        <DogImages>
          <img className="mainImage" src={pet?.photo_url} alt="" />
          <div>
            <div>
              {photos?.map((photo) => (
                <img key={photo.id} src={photo.photo_url} alt="dog image" />
              ))}
            </div>
          </div>
        </DogImages>
        <ContainerDogDetails>
          <DescDog>
            <p className="name">{pet?.name}</p>
            <p className="description">{pet?.description}</p>
            <div className="list-details">
              <div className="card-detail">
                <SlEnergy />
                <p>Muita energia</p>
              </div>
              <div className="card-detail">
                <TbMaximize />
                <p>Ambiente amplo</p>
              </div>
              <div className="card-detail">
                <FaEllipsisH />
                <p>Pequenino</p>
              </div>
            </div>
          </DescDog>

          <Map>
            <div className="map">
              <span className="arrow-map">
                <img src={Logo} alt="" />
                <MdOutlineArrowDropDown />
              </span>
            </div>
            <div className="footer-map">Ver rotas no Google Maps</div>
          </Map>

          <Location>
            <div className="orange-square">
              <img src={Logo} alt="" />
            </div>
            <div>
              <div className="address">
                <h1>Seu Cãopanheiro</h1>
                <p>{org?.address} </p>
              </div>
              <div className="contact">
                <RiWhatsappFill />
                <p className="phone">{org?.whatsappNumber}</p>
              </div>
            </div>
          </Location>

          <Requirements>
            <h1>Requesitos para adoção</h1>
            <div>
              <div className="item-requirements">
                <AiOutlineExclamationCircle />
                <p>Local grande para o animal correr e brincar.</p>
              </div>
              <div className="item-requirements">
                <AiOutlineExclamationCircle />
                <p>Proibido apartamento</p>
              </div>
              <div className="item-requirements">
                <AiOutlineExclamationCircle />
                <p>Ambiente frio, pois possui muito pelo.</p>
              </div>
              <div className="item-requirements">
                <AiOutlineExclamationCircle />
                <p>Cão com intolerância a lactose.</p>
              </div>
            </div>
          </Requirements>

          <ButtonContact>
            <RiWhatsappLine />
            <p>Entrar em contato</p>
          </ButtonContact>
        </ContainerDogDetails>
      </main>
    </Container>
  )
}
