import Logo from '../../assets/icons/logo.svg'
import Dogs from '../../assets/images/dogs.png'
import { BannerPets, Container } from './style'

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

      <div>
        <h1>Cadastre sua organização</h1>

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div>
            <label htmlFor="">Endereço</label>
            <input type="text" name="endereco" />
          </div>
          <div className="map"></div>
          <div>
            <label htmlFor=""></label>
            <input type="text" name="whatsapp" />
          </div>
          <div>
            <label htmlFor="senha"></label>
            <input type="password" name="senha" />
          </div>
          <div>
            <label htmlFor="confirmar"></label>
            <input type="password" name="confirmar" />
          </div>

          <button>Cadastrar</button>

          <p>já possui uma conta?</p>
        </form>
      </div>
    </Container>
  )
}
