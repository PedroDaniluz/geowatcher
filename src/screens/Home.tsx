import { View, Text, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styled from "styled-components";
import theme from "../styles/theme";
import StateCard from "../components/StateCard";
import LastMeasureCard from "../components/LastMeasureCard";

const Home = () => {
    return (
        <Container>
            <Header>Painel de Riscos</Header>
            <StateCard isSafe = {true} />
            <LastMeasureCard locality="Aclimação, São Paulo - SP" inclination={30} humity={54} />
            <Pressable onPress={() => console.log('click')} style={{ width: '100%' }}>
                {({ pressed }) => (
                    <StyledButton pressed={pressed}>
                        <Ionicons name="add-circle-outline" size={24} color={theme.colors.primary} />
                        <ButtonText>Rigistrar nova medição</ButtonText>
                    </StyledButton>
                )}
            </Pressable>
        </Container>
    );
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

const StyledButton = styled(View)<{ pressed: boolean }>`
    width: 100%;
    border: 1px solid ${theme.colors.primary};
    align-items: center;
    gap: 8px;
    flex-direction: row;
    padding: 16px 12px;
    border-radius: 6px;
    opacity: ${({ pressed }) => (pressed ? 0.9 : 1)};
`;

const ButtonText = styled(Text)`
    font-size: 16px;
    font-family: ${theme.fonts.semiBold};
    color: ${theme.colors.primary};
`;

export default Home;