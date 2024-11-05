import styled from 'styled-components'
import SingBungSurfing from '../asset/images/MainPage/SingBungSurfing.svg'
import WindowsLogo from '../asset/images/MainPage/WindowsLogo.svg?react'
import ChromeLogo from '../asset/images/MainPage/ChromeLogo.svg?react'

const s = {
  Container: styled.section`
    display: flex;
    flex-direction: column;

    align-items: center;
  `,
  TitleSection: styled.section`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 90%;
    height: 700px;

    background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${SingBungSurfing});
    background-position: right 0 bottom 0;
    background-size: 640px 640px;
    background-repeat: no-repeat;
  `,
  TitleText: styled.h1`
    font-size: 48px;
    font-weight: 700;
  `,
  TitleTextArea: styled.div`
    margin: 150px 0px;
  `,
  TextWithTitle: styled.span`
    font-size: 24px;
  `,
  DownloadButtonArea: styled.div`
    display: flex;
    flex-direction: row;
  `,
  DownloadButton: styled.button`
    margin: 50px 20px;
    padding: 5px 10px;

    display: flex;
    flex-direction: row;

    align-items: center;

    background-color: #000000;
    color: #ffffff;

    border-radius: 10px;

    font-size: 28px;
  `,
  DescriptionSection: styled.section`
    height: 1000px;

    background-color: #cccccc;
  `,
  DownloadSection: styled.section`
    width: 100%;
    min-height: 1500px;
  `,
  DownloadArea: styled.div`
    margin: 0 5%;

    display: flex;
    width: 90%;
    min-height: 700px;

    background-color: white;
  `,
  DownloadTextArea: styled.div`
    box-sizing: border-box;

    width: 55%;
    height: 500px;
  `,
  DownloadText: styled.span`
    font-size: 96px;
  `,
  DownloadImgArea: styled.div`
    box-sizing: border-box;

    width: 45%;
    height: 500px;

    border-radius: 20px;
  `,
}

const MainPage = () => {
  return (
    <s.Container>
      <s.TitleSection>
        <s.TitleTextArea>
          <s.TitleText>인터넷 밈을 한 곳에 정리하세요</s.TitleText>
        </s.TitleTextArea>
        <s.TextWithTitle>싱글벙글은 SSAFY B205팀이 개발한 이미지 관리 플랫폼입니다.</s.TextWithTitle>
        <s.TextWithTitle>
          손쉽게 웹상의 재밌는 이미지, GIF, 밈 등을 다운받아 저장하고 나만의 컬렉션을 만들어 보세요.
        </s.TextWithTitle>
        <br />
        <s.TextWithTitle>지금 바로 싱글벙글과 함께 웹서핑의 재미를 두 배로 늘려보세요!</s.TextWithTitle>
        <s.DownloadButtonArea>
          <s.DownloadButton>
            <WindowsLogo /> Windows 앱 다운로드
          </s.DownloadButton>
          <s.DownloadButton>
            <ChromeLogo /> 확장 프로그램 다운로드
          </s.DownloadButton>
        </s.DownloadButtonArea>
      </s.TitleSection>
      <s.DescriptionSection></s.DescriptionSection>
      <s.DownloadSection>
        <s.DownloadArea>
          <s.DownloadTextArea>
            <s.DownloadText>싱글벙글 신나는 이미지 저장을 위해 싱글벙글 데스크톱 앱을 다운로드하세요</s.DownloadText>
            <s.DownloadButton>
              <WindowsLogo /> Windows 앱 다운로드
            </s.DownloadButton>
          </s.DownloadTextArea>
          <s.DownloadImgArea></s.DownloadImgArea>
        </s.DownloadArea>
        <s.DownloadArea>
          <s.DownloadImgArea></s.DownloadImgArea>
          <s.DownloadTextArea>
            <s.DownloadText>간편한 이미지 저장을 위해 크롬 확장 프로그램을 다운로드하세요</s.DownloadText>
            <s.DownloadButton>
              <ChromeLogo /> 확장 프로그램 다운로드
            </s.DownloadButton>
          </s.DownloadTextArea>
        </s.DownloadArea>
      </s.DownloadSection>
    </s.Container>
  )
}

export default MainPage
