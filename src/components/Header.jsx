import styled from "styled-components";
import logo from "../assets/images/logo.png";
import {AttachMoney, CurrencyRuble, Euro, KeyboardArrowDown, Search, ShoppingCartOutlined} from "@mui/icons-material";
import {Option, Select, selectClasses} from "@mui/joy";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
`

const Container = styled.div`
  width: calc(100% - 4vw);
  padding: 1vw 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  width: 6vw;
  height: 3vw;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Item = styled.span`
  text-transform: uppercase;
  opacity: .7;
  cursor: pointer;

  &:hover {
    opacity: .4;
  }
`

const SearchContainer = styled.div`
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, .2);
  border-radius: .15vw;
  padding: .2vw;

  &:hover {
    opacity: .7;
  }
`

const SearchInput = styled.input`
  width: 100%;
  text-transform: uppercase;
  opacity: .7;
  border: none;
  outline: none;
  background-color: transparent;
`

const SearchIcon = styled(Search)`
  opacity: .4;
  cursor: pointer;

  &:hover {
    opacity: .4;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
`

const ShoppingCartIcon = styled(ShoppingCartOutlined)`
  opacity: .7;
  cursor: pointer;

  &:hover {
    opacity: .4;
  }
`

const Header = () => {
    const navigate = useNavigate()

    return (
        <Wrapper>
            <Container>
                <Left>
                    <Logo src={logo} alt="Logo Image" onClick={() => navigate("/")}/>
                </Left>
                <Center>
                    <Item>Каталог игр</Item>
                    <Item>Отзывы</Item>
                    <SearchContainer>
                        <SearchInput placeholder="Найти игры"/>
                        <SearchIcon/>
                    </SearchContainer>
                </Center>
                <Right>
                    <Select defaultValue="ruble" indicator={<KeyboardArrowDown/>} sx={{
                        width: 150,
                        [`& .${selectClasses.indicator}`]: {
                            transition: ".4s ease-out",
                            [`&.${selectClasses.expanded}`]: {
                                transform: "rotate(-180deg)",
                            },
                        },
                    }}>
                        <Option value="ruble"><CurrencyRuble/>&nbsp;Рубль</Option>
                        <Option value="dollar"><AttachMoney/>&nbsp;Доллар</Option>
                        <Option value="euro"><Euro/>&nbsp;Евро</Option>
                    </Select>
                    <ShoppingCartIcon/>
                </Right>
            </Container>
        </Wrapper>
    )
}

export default Header