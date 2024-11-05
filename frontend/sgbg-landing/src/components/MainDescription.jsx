import styled from 'styled-components'

const s = {
  DescriptionSection: styled.section`
    width: 1280px;
    height: 1000px;

    background-color: #cccccc;

    border-radius: 20px;
  `,
}

const MainDescription = () => {
  return (
    <>
      <s.DescriptionSection></s.DescriptionSection>
    </>
  )
}

export default MainDescription
