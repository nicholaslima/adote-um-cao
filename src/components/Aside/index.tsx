import { Select } from '@/components/Select'

import logo from '@/assets/icons/logo.svg'
import search from '@/assets/icons/search.svg'

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
} from './styles'
import { api } from '@/api/api'
import { useState } from 'react'
import { useContextPets } from '@/contexts'

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

interface FilterType {
  name: string
  value: string
}

export function Aside() {
  const [filters, setFilters] = useState<FilterType[]>([])
  const [city, setCity] = useState('')
  const { insertPets } = useContextPets()

  async function handleSearchPets() {
    const ObjectFilters = filters.reduce(
      (obj, item) => ({ ...obj, [item.name]: item.value }),
      {},
    )

    await api
      .get(`/pets/${city}`, { params: ObjectFilters })
      .then((response) => insertPets(response.data.pets))
  }

  function handleChangeSearchFilters(e: any) {
    const value = e.target.value
    const name = e.target.name

    const newFilter = {
      name,
      value,
    }

    const FilterExistIndex = filters.findIndex(
      (item) => newFilter.name === item.name,
    )

    if (FilterExistIndex === -1) {
      setFilters((OldFilters) => [...OldFilters, newFilter])
    } else {
      const newList = filters
      newList[FilterExistIndex] = newFilter
      setFilters(newList)
    }
  }

  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            <input
              type="text"
              placeholder="Insira uma cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearchPets}>
              <img src={search} alt="ícone de lupa" />
            </button>
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select
            name="age"
            onChange={handleChangeSearchFilters}
            label="Idade"
            options={ageOptions}
          />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
            onChange={handleChangeSearchFilters}
          />

          <Select
            onChange={handleChangeSearchFilters}
            name="size"
            label="Porte do animal"
            options={sizeOptions}
          />

          <Select
            name="independence"
            label="Nível de independência"
            options={independencyOptions}
            onChange={handleChangeSearchFilters}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
