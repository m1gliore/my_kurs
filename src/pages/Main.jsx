import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  background-color: #515151;
`

const Main = () => {
    return (
        <Wrapper>
            <Container>
                Хеллоу
            </Container>
        </Wrapper>
    )
}

export default Main