import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import theme from "../styles/theme";

// React Navigation
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import InputField from "../components/InputField";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'NewMeasureForm'>;

const NewMeasureForm = () => {
    const [humity, setHumity] = useState('');
    const [inclination, setInclination] = useState('');
    const [observation, setObservation] = useState('');
    const navigation = useNavigation<NavigationProps>();
    return (
        <Container>
            <Pressable onPress={() => navigation.goBack()}>
                {({ pressed }) => (
                    <BackButton pressed={pressed}>
                        <Ionicons
                            name="chevron-back-outline"
                            size={32}
                            color={theme.colors.primary}
                        />
                    </BackButton>
                )}
            </Pressable>
            <Header>Insira os dados dos sensores</Header>
            <InputField
                title="Umidade"
                placeholder="Insira o valor de umidade"
                value={humity}
                onChangeText={setHumity}
                isNumeric
            />
            <InputField
                title="Inclinação"
                placeholder="Insira o valor de inclinação"
                value={inclination}
                onChangeText={setInclination}
                isNumeric
            />
            <InputField
                title="Observações"
                placeholder="Insira as observações"
                value={observation}
                onChangeText={setObservation}
            />
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

const BackButton = styled(View) <{ pressed?: boolean }>`
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    border: 1px solid ${theme.colors.primary};
    opacity: ${({ pressed }) => (pressed ? 0.8 : 1)};
`;

export default NewMeasureForm;