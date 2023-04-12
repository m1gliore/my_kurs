import styled from "styled-components";
import logo from "../assets/images/logo.png";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
`

const Container = styled.div`
  width: calc(100% - 4vw);
  padding: 1vw 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1vw;
`

const Logo = styled.img`
  width: 9vw;
  height: 4.5vw;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`

const Copyright = styled.span`
  font-weight: 900;
`

const Description = styled.span`
  font-size: 1rem;
`

const Footer = () => {
    const navigate = useNavigate()

    return (
        <Wrapper>
            <Container>
                <Logo src={logo} alt="Logo Image" onClick={() => navigate("/")}/>
                <Copyright>© 2023-2023 Migliore</Copyright>
                <Description>Все названия игр, компаний, торговых марок, логотипы и игровые материалы являются
                    собственностью соответствующих владельцев.</Description>
            </Container>
        </Wrapper>
    )
}

export default Footer