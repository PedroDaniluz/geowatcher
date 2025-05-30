import React, { useState } from "react";
import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styled from "styled-components/native";
import theme from "../styles/theme";
import StateCard from "../components/StateCard";
import LastMeasureCard from "../components/LastMeasureCard";
import { getMeasurements } from '../services/measurements';

// React Navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type LastMeasure = {
    humidity: number;
    inclination: number;
    location: string;
};

const Home = () => {
    const [lastMeasure, setLastMeasure] = useState<LastMeasure | null>(null);
    const [isSafe, setIsSafe] = useState(true);

    useFocusEffect(
        React.useCallback(() => {
            getMeasurements().then(measures => {
                if (measures.length > 0) {
                    const last = measures[measures.length - 1];
                    setLastMeasure({
                        humidity: last.humidity,
                        inclination: last.inclination,
                        location: last.location,
                    });
                    // Lógica de segurança
                    setIsSafe(last.inclination <= 20 && last.humidity <= 70);
                } else {
                    setLastMeasure(null);
                    setIsSafe(true); // padrão seguro se não houver dados
                }
            });
        }, [])
    );

    const navigation = useNavigation<NavigationProps>();
    return (
        <Container>
            <Header>Painel de Riscos</Header>
            <StateCard isSafe={isSafe} />
            {lastMeasure && (
                <LastMeasureCard
                    locality={lastMeasure.location}
                    inclination={lastMeasure.inclination}
                    humity={lastMeasure.humidity}
                />
            )}
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

const Container = styled.View`
    flex: 1;
    padding: 72px 32px;
    background-color: ${theme.colors.background};
    gap: 24px;
`;

const Header = styled.Text`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.bold};
    font-size: 28px;
    margin-bottom: 8px;
`;

const StyledButton = styled.View <{ pressed: boolean }>`
    width: 100%;
    border: 1px solid ${theme.colors.primary};
    align-items: center;
    gap: 8px;
    flex-direction: row;
    padding: 16px 12px;
    border-radius: 6px;
    opacity: ${({ pressed }) => (pressed ? 0.8 : 1)};
`;

const ButtonText = styled.Text`
    font-size: 16px;
    font-family: ${theme.fonts.semiBold};
    color: ${theme.colors.primary};
`;

export default Home;