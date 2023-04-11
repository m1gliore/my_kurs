import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  width: 100%;
`

const App = () => {
    return (
        <Wrapper>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                </Routes>
                <Footer/>
            </Router>
        </Wrapper>
    )
}

export default App
