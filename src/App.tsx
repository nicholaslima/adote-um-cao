import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/global'
import { PetsProvider } from './contexts'

function App() {
  return (
    <PetsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </PetsProvider>
  )
}

export default App
