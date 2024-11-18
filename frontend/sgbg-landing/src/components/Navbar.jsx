import styled from 'styled-components'
import SingBungLogo from '../asset/images/Navbar/SingBungLogo.svg'

const s = {
  Container: styled.div`
    padding: 0px 10px;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    height: 60px;

    border-bottom: 1px solid #cccccc;
  `,
  NavLogoArea: styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
  `,
  NavLogo: styled.img`
    width: 40px;
  `,
  NavTitle: styled.span`
    padding: 0px 5px;

    font-size: 20px;
    font-weight: 700;
  `,
  LoginButton: styled.button`
    padding: 10px;

    border-radius: 10px;

    background-color: #000000;
    cursor: pointer;
  `,
  LoginText: styled.span`
    font-size: 16px;
    color: #ffffff;
  `,
}

const Navbar = () => {
  const handleLoginClick = () => {
    window.location.href = 'https://k11b205.p.ssafy.io/#/login'
  }

  return (
    <>
      <s.Container>
        <s.NavLogoArea>
          <s.NavLogo src={SingBungLogo} />
          <s.NavTitle>싱글벙글</s.NavTitle>
        </s.NavLogoArea>
        <s.LoginButton onClick={handleLoginClick}>
          <s.LoginText>로그인</s.LoginText>
        </s.LoginButton>
      </s.Container>
    </>
  )
}

export default Navbar
