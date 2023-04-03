import { Background, Container, Footer, Header, Main } from './styles'
import logo from '../../assets/icons/logo.svg'
import dogs from '../../assets/images/dogs.png'
import search from '../../assets/icons/search.svg'
import arrowDown from '../../assets/icons/chevron-bottom.svg'

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  return (
    <Background>
      <Container>
        <Header>
          <img src={logo} alt="logo dog face" />
          <h1>FindAFriend</h1>
        </Header>
        <Main>
          <p>Leve a felicidade para o seu lar</p>
          <img src={dogs} alt="dogs image" />
        </Main>
        <Footer>
          <p className="title">
            Encontre o animal de estimação ideal para seu estilo de vida!
          </p>
          <form>
            <p>Busque um amigo:</p>
            <div className="estados">
              <select>
                <option value="PE">PE</option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <img src={arrowDown} alt="icone flexa para abrir o select" />
            </div>

            <div className="cidades">
              <select id="">
                <option value="">Recife</option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <img src={arrowDown} alt="icone flexa para abrir o select" />
            </div>

            <button className="buscar">
              <img src={search} alt="" />
            </button>
          </form>
        </Footer>
      </Container>
    </Background>
  )
}
