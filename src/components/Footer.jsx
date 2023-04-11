import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: firebrick;
`

const Footer = () => {
    return (
        <Wrapper>
            <Container>Футер</Container>
        </Wrapper>
    )
}

export default Footer