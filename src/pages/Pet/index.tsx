import { Container } from './styles'
import Logo from '../../assets/icons/logo.svg'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

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
      <main></main>
    </Container>
  )
}
