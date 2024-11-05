import styled from 'styled-components'
import MainDownload from '../components/MainDownload'
import MatinTitle from '../components/MainTitle'
import MainDescription from '../components/MainDescription'

const s = {
  Container: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;

    align-items: center;
  `,
}

const MainPage = () => {
  return (
    <s.Container>
      <MatinTitle />
      <MainDescription />
      <MainDownload />
    </s.Container>
  )
}

export default MainPage
