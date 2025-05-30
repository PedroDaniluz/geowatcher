import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styled from "styled-components";
import theme from "../styles/theme";

interface StateCardProps {
    isSafe: boolean;
}

const StateCard: React.FC<StateCardProps> = ({ isSafe }) => {
    return (
        <Card>
            <CardText>
                <CardHeader>Estado atual</CardHeader>
                <CardState isSafe={isSafe}>{isSafe ? 'Seguro' : 'Risco'}</CardState>
            </CardText>
            {isSafe ?
                <Ionicons name="shield-checkmark" size={80} color={theme.colors.secundary} />
                :
                <Ionicons name="warning" size={80} color="red" />}
        </Card>
    )
}

const Card = styled(View)`
    width: 100%;
    padding: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.background};
    border: 0.5px solid ${theme.colors.primary};
    border-radius: 8px;
    shadow-color: #000;
    shadow-opacity: 0.1;
    shadow-radius: 4px;
    shadow-offset: 0px 2px;
    elevation: 4;
`;

const CardText = styled(View)`
    gap: 8px;
`;

const CardHeader = styled(Text)`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.bold};
    font-size: 20px;
`;

const CardState = styled(Text) <{ isSafe?: boolean }>`
    color: ${({ isSafe }) => isSafe ? theme.colors.secundary : 'red'};
    font-family: ${theme.fonts.extraBold};
    font-size: 44px;
`;

export default StateCard;