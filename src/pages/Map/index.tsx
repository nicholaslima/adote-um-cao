import { Aside } from '~/Aside'
import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'
import dog from '@/assets/images/dog.png'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '@/api/api'

interface PetType {
  id: string
  name: string
  description: string
  age: 'cub' | 'adolescent' | 'elderly'
  energy: 'low' | 'medium' | 'high'
  independence: boolean
  size: 'small' | 'medium' | 'big'
  type: 'dog' | 'cat'
  photo: string
  photo_url: string
  orgId: string
}

export function Map() {
  const [pets, setPets] = useState<PetType[]>([])
  const [filter, setFilter] = useState('')
  const location = useLocation()
  const city = location.state.city

  let petsFiltered = pets.filter((pet) => {
    if (filter === '') {
      return pet
    }
    return pet.type === filter
  })

  useEffect(() => {
    if (location) {
      api.get(`/pets/${city}`).then((response) => setPets(response.data.pets))
    }
  }, [location])

  function handleFilterByPetType(e: any) {
    setFilter(e.target.value)

    if (filter === '') {
      petsFiltered = pets
      return
    }
    const petsByType = pets.filter((pet) => pet.type === filter)
    petsFiltered = petsByType
  }

  return (
    <Container>
      <Aside />

      <Content>
        <Header>
          <p>
            Encontre <span>324 amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect
              name="size"
              id="size"
              onChange={(e) => handleFilterByPetType(e)}
            >
              <option value="">Gatos e Cachorros</option>
              <option value="cat">Gatos</option>
              <option value="dog">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          {petsFiltered.map((pet) => (
            <Card
              key={pet.id}
              path={pet.photo_url}
              type={pet.type}
              name={pet.name}
            />
          ))}
        </Display>
      </Content>
    </Container>
  )
}
