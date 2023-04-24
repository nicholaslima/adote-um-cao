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
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { RiWhatsappFill, RiWhatsappLine } from 'react-icons/ri'
import { SlEnergy } from 'react-icons/sl'
import { TbMaximize } from 'react-icons/tb'
import { FaEllipsisH } from 'react-icons/fa'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import { api } from '@/api/api'
import iconMap from '../../assets/icons/icon.svg'
import { PetType } from '@/contexts'
import 'leaflet/dist/leaflet.css'

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

interface coordinatesType {
  latitude: number
  longitude: number
}
interface adoptionRequirementsType {
  id: string
  petId: string
  title: string
}
export function Pet() {
  const [pet, setPet] = useState<PetType>()
  const [org, setOrg] = useState<OrgType>()
  const [photos, setPhotos] = useState<photoPetType[]>()
  const [coordinates, setCoordinates] = useState<coordinatesType>(
    {} as coordinatesType,
  )
  const [requirements, setRequirements] = useState<adoptionRequirementsType[]>()
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

  useEffect(() => {
    api.get(`/pets/adoption-requirements/${petId}`).then((response) => {
      setRequirements(response.data.adoption_requirements)
    })
  }, [petId])

  useEffect(() => {
    api.get(`/location/coordinates/${org?.cep}`).then((response) => {
      const coordinatesInNumber = {
        latitude: Number(response.data.coordinates.latitude),
        longitude: Number(response.data.coordinates.longitude),
      }
      setCoordinates(coordinatesInNumber)
    })
  }, [org])

  const myIcon = L.icon({
    iconUrl: iconMap,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

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
          <div
            className="mainImage"
            style={{
              backgroundImage: `url(${pet?.photo_url})`,
              backgroundSize: 'cover',
              height: '336px',
              width: '100%',
              borderRadius: '20px 20px 0 0',
            }}
          />
          <div>
            <div>
              {photos?.map((photo) => (
                <div
                  key={photo.id}
                  style={{
                    backgroundImage: `url(${photo.photo_url})`,
                    backgroundSize: 'cover',
                    height: '80px',
                    width: '80px',
                    borderRadius: '15px',
                  }}
                />
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
          {coordinates.latitude && (
            <Map>
              <MapContainer
                center={[coordinates.latitude, coordinates.longitude]}
                zoom={13}
                scrollWheelZoom={false}
                className="map"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  icon={myIcon}
                  position={[coordinates.latitude, coordinates.longitude]}
                >
                  <Popup>Localização de seu pet.</Popup>
                </Marker>
              </MapContainer>

              <Link
                to={`https://www.google.com/maps/@${coordinates.latitude},${coordinates.longitude},15z`}
                target="_blank"
                className="footer-map"
              >
                Ver rotas no Google Maps
              </Link>
            </Map>
          )}
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
              {requirements?.map((requirement) => (
                <div key={requirement.id} className="item-requirements">
                  <AiOutlineExclamationCircle />
                  <p>{requirement.title}.</p>
                </div>
              ))}
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
