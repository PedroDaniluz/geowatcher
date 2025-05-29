import { View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styled from "styled-components";
import theme from "../styles/theme";

interface CardProps {
    locality: string;
    humity: number;
    inclination: number;
}

const StateCard: React.FC<CardProps> = ({ locality, humity, inclination }) => {
    return (
        <Card>
            <View>
                <CardTitle>Última medição</CardTitle>
                <CardSubtitle>{locality}</CardSubtitle>
            </View>
            <CardMeasure>
                <Image source={require('../../assets/drops.png')} style={{width: 40, height: 42}}/>
                <MeasureText>{humity}%</MeasureText>
                <Image source={require('../../assets/ruler.png')} style={{width: 40, height: 40}}/>
                <MeasureText>{inclination}º</MeasureText>
            </CardMeasure>
        </Card>
    )
}

const Card = styled(View)`
    width: 100%;
    padding: 16px;
    gap: 12px;
    background-color: ${theme.colors.background};
    border: 0.5px solid ${theme.colors.primary};
    border-radius: 8px;
    shadow-color: #000;
    shadow-opacity: 0.1;
    shadow-radius: 4px;
    shadow-offset: 0px 2px;
    elevation: 4;
`;

const CardTitle = styled(Text)`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.bold};
    font-size: 20px;
`;

const CardSubtitle = styled(Text)`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.light};
    font-size: 12px;
`;

const CardMeasure = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const MeasureText = styled(Text)`
    color: ${theme.colors.secundary};
    font-family: ${theme.fonts.extraBold};
    font-size: 44px;
`;

export default StateCard;