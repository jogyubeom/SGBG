import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import GlobalStyle from './GlobalStyles'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
