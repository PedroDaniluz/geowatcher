import { useState } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components/native";
import theme from "../styles/theme";
import InputField from "../components/InputField";
import DropdownField from "../components/DropdownField";
import SubmitButton from "../components/SubmitButton";

const ReportForm = () => {
    const [incidentType, setIncidentType] = useState('');
    const [rescueType, setRescueType] = useState('');
    const [notes, setNotes] = useState('');
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                    onClick={() => {
                        console.log("Socorro Solicitado", {
                            incidentType,
                            rescueType,
                            notes,
                        });
                    }}
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