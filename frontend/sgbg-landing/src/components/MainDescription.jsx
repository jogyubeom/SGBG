import styled from 'styled-components'
import ImageSaveGif from '../asset/images/MainPage/image-save.gif?react'
import KeywordSearchGif from '../asset/images/MainPage/keyword-search.gif?react'

const s = {
  DescriptionSection: styled.section`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

    border-radius: 20px;
  `,
  DescriptionTitle: styled.div`
    font-size: 48px;
    font-weight: 700;
  `,
  DescriptionTextArea: styled.div`
    margin: 20px 0;
    color: #949494;
    text-align: center;
  `,
  DescriptionText: styled.div``,
  ImageSaveGif: styled.img`
    margin-bottom: 200px;
    max-width: 80%; /* 부모 요소의 너비를 넘지 않도록 설정 */
    max-height: 100%; /* 부모 요소의 높이를 넘지 않도록 설정 */
    object-fit: contain;
  `,
}

const MainDescription = () => {
  return (
    <>
      <s.DescriptionSection>
        <s.DescriptionTitle>이미지 저장이 간편해요</s.DescriptionTitle>
        <s.DescriptionTextArea>
          <s.DescriptionText>이미지를 우클릭, 드래그 앤 드롭으로 간편하게 저장하세요.</s.DescriptionText>
          <s.DescriptionText>
            싱글벙글에서는 이미지를 내 폴더에 지정해서 저장해서 하고 관리할 수 있어요.
          </s.DescriptionText>
        </s.DescriptionTextArea>
        <s.ImageSaveGif src={ImageSaveGif} />
        <s.DescriptionTitle>다양한 이미지를 모아서 보아요</s.DescriptionTitle>
        <s.DescriptionTextArea>
          <s.DescriptionText>웹에서 저장한 내 이미지를 싱글벙글에서 관리해요.</s.DescriptionText>
          <s.DescriptionText>다른 사람들이 저장한 재밌는 밈 이미지도 볼 수 있어요.</s.DescriptionText>
          <s.DescriptionText>키워드를 기반으로 간편하게 원하는 이미지를 검색해서 볼 수 있어요.</s.DescriptionText>
        </s.DescriptionTextArea>
        <s.ImageSaveGif src={KeywordSearchGif} />
      </s.DescriptionSection>
    </>
  )
}

export default MainDescription
