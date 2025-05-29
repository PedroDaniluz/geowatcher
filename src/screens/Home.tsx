import { View, Text } from "react-native";
import theme from "../styles/theme";
import styled from "styled-components";
import StateCard from "../components/StateCard";

const Home = () => {
    return (
        <Container>
            <Header>Painel de Riscos</Header>
            <StateCard isSafe = {true} />
        </Container>
    );
}

const Container = styled(View)`
    flex: 1;
    padding: 72px 32px;
    background-color: ${theme.colors.background};
`;

const Header = styled(Text)`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.bold};
    font-size: 28px;
    margin-bottom: 24px;
`;

export default Home;