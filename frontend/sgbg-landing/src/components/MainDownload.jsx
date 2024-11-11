import styled from 'styled-components'
import WindowsLogo from '../asset/images/MainPage/WindowsLogo.svg?react'
import ChromeLogo from '../asset/images/MainPage/ChromeLogo.svg?react'

const s = {
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
    cursor: pointer;
  `,
  DownloadSection: styled.section`
    width: 1280px;
    min-height: 1500px;
  `,
  DownloadArea: styled.div`
    margin: 20px 0px;

    display: flex;
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

const MainDownload = () => {
  const handleWindowsClick = () => {
    window.location.href = 'https://github.com/jogyubeom/SGBG_release/releases/tag/v1.0.84'
  }

  const handleChromeClick = () => {
    window.location.href =
      'https://chromewebstore.google.com/detail/%EC%8B%B1%EA%B8%80%EB%B2%99%EA%B8%80/dkeojbjcmphonpoojkdobbdakebaljhe?hl=ko&utm_source=ext_sidebar'
  }
  return (
    <>
      <s.DownloadSection>
        <s.DownloadArea>
          <s.DownloadTextArea>
            <s.DownloadText>싱글벙글 신나는 이미지 저장을 위해 싱글벙글 데스크톱 앱을 다운로드하세요</s.DownloadText>
            <s.DownloadButton onClick={handleWindowsClick}>
              <WindowsLogo /> Windows 앱 다운로드
            </s.DownloadButton>
          </s.DownloadTextArea>
          <s.DownloadImgArea></s.DownloadImgArea>
        </s.DownloadArea>
        <s.DownloadArea>
          <s.DownloadImgArea></s.DownloadImgArea>
          <s.DownloadTextArea>
            <s.DownloadText>간편한 이미지 저장을 위해 크롬 확장 프로그램을 다운로드하세요</s.DownloadText>
            <s.DownloadButton onClick={handleChromeClick}>
              <ChromeLogo /> 확장 프로그램 다운로드
            </s.DownloadButton>
          </s.DownloadTextArea>
        </s.DownloadArea>
      </s.DownloadSection>
    </>
  )
}

export default MainDownload
