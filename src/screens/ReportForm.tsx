import { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Platform, Alert } from "react-native";
import styled from "styled-components/native";
import theme from "../styles/theme";
import InputField from "../components/InputField";
import DropdownField from "../components/DropdownField";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'ReportForm'>;

const ReportForm = () => {
    const [incidentType, setIncidentType] = useState('');
    const [rescueType, setRescueType] = useState('');
    const [notes, setNotes] = useState('');
    const navigation = useNavigation<NavigationProps>();

    function getRescueLabel(value: string) {
        switch (value) {
            case "policia": return "Polícia";
            case "bombeiros": return "Bombeiros";
            case "guarda": return "Guarda Cívil";
            case "analista": return "Análise Técnica";
            default: return "";
        }
    }

    function handleSubmit() {
        if (!incidentType || !rescueType) {
            Alert.alert("Preencha todos os campos obrigatórios.");
            return;
        }
        Alert.alert(
            "Alerta enviado",
            `Foi encaminhado um alerta para ${getRescueLabel(rescueType)}.`,
            [
                {
                    text: "OK",
                    onPress: () => {
                        setIncidentType('');
                        setRescueType('');
                        setNotes('');
                        navigation.navigate('Main', { screen: 'HomeTab' });
                    }
                }
            ]
        );
    }

    return (
        // Dispensa o teclado ao clicar fora do campo de texto - não funciona no web
        <TouchableWithoutFeedback onPress={(Platform.OS === 'web') ? () => { } : Keyboard.dismiss}>
            <Container>
                <Header>Mitigar danos</Header>
                <DropdownField
                    title="Tipo de incidente"
                    placeholder="Selecione o tipo de incidente"
                    selectedValue={incidentType}
                    onValueChange={setIncidentType}
                    options={[
                        { label: "Selecione...", value: null },
                        { label: "Incêndio", value: "incendio" },
                        { label: "Inundação", value: "inundacao" },
                        { label: "Deslizamento", value: "deslizamento" },
                    ]}
                />
                <DropdownField
                    title="Tipo de socorro"
                    placeholder="Selecione a ação de socorro"
                    selectedValue={rescueType}
                    onValueChange={setRescueType}
                    options={[
                        { label: "Selecione...", value: null },
                        { label: "Polícia", value: "policia" },
                        { label: "Bombeiros", value: "bombeiros" },
                        { label: "Guarda Cívil", value: "guarda" },
                        { label: "Análise Técnica", value: "analista" },
                    ]}
                />
                <InputField
                    title="Observações"
                    placeholder="Insira as observações"
                    value={notes}
                    onChangeText={setNotes}
                />
                <SubmitButton
                    text="Enviar"
                    onClick={handleSubmit}
                />
            </Container>
        </TouchableWithoutFeedback>
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

export default ReportForm;