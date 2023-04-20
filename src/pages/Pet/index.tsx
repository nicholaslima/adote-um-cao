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
import { useNavigate } from 'react-router-dom'
import Dog1 from '../../assets/images/dog1.png'
import Dog2 from '../../assets/images/dog2.png'
import { RiWhatsappFill, RiWhatsappLine } from 'react-icons/ri'
import { SlEnergy } from 'react-icons/sl'
import { TbMaximize } from 'react-icons/tb'
import { FaEllipsisH } from 'react-icons/fa'
import { MdOutlineArrowDropDown } from 'react-icons/md'

export function Pet() {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate('/map')
  }

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
          <img className="mainImage" src={Dog1} alt="" />
          <div>
            <div>
              <img src={Dog2} alt="" />
              <img src={Dog2} alt="" />
              <img src={Dog2} alt="" />
              <img src={Dog2} alt="" />
              <img src={Dog2} alt="" />
              <img src={Dog2} alt="" />
            </div>
          </div>
        </DogImages>
        <ContainerDogDetails>
          <DescDog>
            <p className="name">Alfredo</p>
            <p className="description">
              Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
              fazer companhia, uma bagunça mas também ama uma soneca.
            </p>
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
                <p>Rua do meio, 123 , Boa viagem, Recife - PE </p>
              </div>
              <div className="contact">
                <RiWhatsappFill />
                <p className="phone">81 1234.4567</p>
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
