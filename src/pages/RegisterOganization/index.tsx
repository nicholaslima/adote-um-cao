import Logo from '../../assets/icons/logo.svg'
import Dogs from '../../assets/images/dogs.png'
import { BannerPets, Container, FormContainer } from './style'

export function RegisterOrganization() {
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

        <form action="">
          <div className="item-input">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="item-input">
            <label htmlFor="">Endereço</label>
            <input type="text" name="endereco" />
          </div>

          <div className="map"></div>

          <div className="item-input">
            <label htmlFor="whatsapp">whatsapp</label>
            <input type="text" name="whatsapp" />
          </div>
          <div className="item-input">
            <label htmlFor="senha">senha</label>
            <input type="password" name="senha" />
          </div>
          <div className="item-input">
            <label htmlFor="confirmar">confirmar senha</label>
            <input type="password" name="confirmar" />
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
