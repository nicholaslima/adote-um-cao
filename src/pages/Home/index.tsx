import { Background, Container, Footer, Header, Main } from './styles'
import logo from '../../assets/icons/logo.svg'
import dogs from '../../assets/images/dogs.png'
import search from '../../assets/icons/search.svg'
import arrowDown from '../../assets/icons/chevron-bottom.svg'
import { useForm } from 'react-hook-form'
import { api } from '@/api/api'
import { useEffect, useState } from 'react'

type StateType = {
  sigla: string
  name: string
}

export function Home() {
  const { handleSubmit, register } = useForm()
  const [states, setStates] = useState<StateType[]>([])

  useEffect(() => {
    api.get('/location/states').then((response) => {
      setStates(response.data.states)
    })
  }, [])

  function handleSearchPets(data: any) {
    console.log(data)
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

          <form onSubmit={handleSubmit(handleSearchPets)}>
            <p>Busque um amigo :</p>
            <div className="estados">
              <select {...register('state')}>
                {states.map((state) => (
                  <option key={state.sigla} value={state.sigla}>
                    {state.sigla}
                  </option>
                ))}
              </select>
              <img src={arrowDown} alt="icone flexa para abrir o select" />
            </div>

            <div className="cidades">
              <select {...register('city')}>
                <option value="recife">Recife</option>
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
