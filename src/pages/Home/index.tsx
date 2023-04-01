import { Background, Container, Header, Main } from './styles'
import logo from '../../assets/icons/logo.svg'
import dogs from '../../assets/images/dogs.png'

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
      </Container>
    </Background>
  )
}
