import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import GlobalStyle from './GlobalStyles'
import Navbar from './components/Navbar'
import styled from 'styled-components'

const s = {
  Container: styled.div``,
}

function App() {
  return (
    <>
      <GlobalStyle />
      <s.Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </s.Container>
    </>
  )
}

export default App
