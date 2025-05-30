import { View, Text, FlatList } from "react-native";
import styled from "styled-components/native";
import theme from "../styles/theme";
import HistoryCard from "../components/HistoryCard";

const History = () => {
    return (
        <Container>
            <Header>Histórico</Header>
            <HistoryCard
                datetime="2025-05-27T14:30"
                locality="Aclimação, São Paulo - SP"
                humity={65}
                inclination={12}
            />
        </Container>
    )
}

const Container = styled(View)`
    flex: 1;
    padding: 72px 32px;
    background-color: ${theme.colors.background};
    gap: 24px;
`;

const Header = styled(Text)`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.bold};
    font-size: 28px;
    margin-bottom: 8px;
`;

export default History;