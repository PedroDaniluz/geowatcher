import { View, Text, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styled from "styled-components";
import theme from "../styles/theme";
import StateCard from "../components/StateCard";
import LastMeasureCard from "../components/LastMeasureCard";

// React Navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
    const navigation = useNavigation<NavigationProps>();
    return (
        <Container>
            <Header>Painel de Riscos</Header>
            <StateCard isSafe = {true} />
            <LastMeasureCard locality="Aclimação, São Paulo - SP" inclination={30} humity={54} />
            <Pressable onPress={() => navigation.navigate('NewMeasureForm')} style={{ width: '100%' }}>
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
    opacity: ${({ pressed }) => (pressed ? 0.8 : 1)};
`;

const ButtonText = styled(Text)`
    font-size: 16px;
    font-family: ${theme.fonts.semiBold};
    color: ${theme.colors.primary};
`;

export default Home;