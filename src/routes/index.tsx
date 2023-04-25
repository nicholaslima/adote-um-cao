import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'
import { Pet } from '@/pages/Pet'
import { RegisterOrganization } from '@/pages/RegisterOganization'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/pet" element={<Pet />} />
      <Route path="/register-org" element={<RegisterOrganization />} />
    </Routes>
  )
}
