import { Background, Container, Footer, Header, Main } from './styles'
import logo from '../../assets/icons/logo.svg'
import dogs from '../../assets/images/dogs.png'
import search from '../../assets/icons/search.svg'
import arrowDown from '../../assets/icons/chevron-bottom.svg'
import { useForm } from 'react-hook-form'
import { api } from '@/api/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type StateType = {
  sigla: string
  name: string
}

export function Home() {
  const { handleSubmit, register } = useForm()
  const [states, setStates] = useState<StateType[]>([])
  const [citys, setCitys] = useState<string[]>([])
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/location/states').then((response) => {
      setStates(response.data.states)
    })
  }, [])

  useEffect(() => {
    if (state) {
      api.get(`/location/citys/${state}`).then((response) => {
        const citysName = response.data.citys.map((city: any) => city.name)
        setCitys(citysName)
      })
    }
  }, [state])

  function handleSearchPets(data: any) {
    navigate('/map', {
      state: {
        city,
      },
    })
  }

  function handleChangeState(e: any) {
    setState(e.target.value)
  }

  function handleChangeCity(e: any) {
    setCity(e.target.value)
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
              <select
                {...register('state')}
                onChange={(e) => handleChangeState(e)}
              >
                <option value=""></option>
                {states.map((state) => (
                  <option key={state.sigla} value={state.sigla}>
                    {state.sigla}
                  </option>
                ))}
              </select>
              <img src={arrowDown} alt="icone flexa para abrir o select" />
            </div>

            <div className="cidades">
              <select
                {...register('city')}
                onChange={(e) => handleChangeCity(e)}
              >
                {citys.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
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
