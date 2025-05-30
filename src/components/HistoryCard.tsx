import { View, Text, Image } from "react-native";
import styled from "styled-components";
import theme from "../styles/theme";

interface HistoryCardProps {
    datetime: string;
    locality: string;
    humity: number;
    inclination: number;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ datetime, locality, humity, inclination }) => {
    const date = new Date(datetime);
    return (
        <Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <CardTitle>{date.toLocaleDateString('pt-BR')}</CardTitle>
                    <CardSubtitle>{date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</CardSubtitle>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <CardSubtitle>{locality.split(',')[0]}</CardSubtitle>
                    <CardSubtitle>{locality.split(',')[1]}</CardSubtitle>
                </View>
            </View>
            <CardMeasure>
                <Measure>
                    <Image source={require('../../assets/drops2.png')} style={{ width: 20, height: 22 }} />
                    <MeasureText>Umidade: {humity}%</MeasureText>
                </Measure>
                <Measure>
                    <Image source={require('../../assets/ruler2.png')} style={{ width: 20, height: 20 }} />
                    <MeasureText>Inclinação: {inclination}º</MeasureText>
                </Measure>
            </CardMeasure>
        </Card>
    )
}

const Card = styled(View)`
    width: 100%;
    padding: 16px;
    gap: 12px;
    background-color: ${theme.colors.background};
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
    margin-top: 8px;
`;

const Measure = styled(View)`
    flex-direction: row;
    align-items: center;
    gap: 6px;
`;

const MeasureText = styled(Text)`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.extraBold};
    font-size: 16px;
`;

export default HistoryCard;