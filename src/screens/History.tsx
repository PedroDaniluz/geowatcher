import React, { useState } from "react";
import { Text, FlatList } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import styled from "styled-components/native";
import theme from "../styles/theme";
import HistoryCard from "../components/HistoryCard";
import { getMeasurements, Measurement, clearMeasurements } from "../services/measurements";
import SubmitButton from "../components/SubmitButton";

const History = () => {
    const [data, setData] = useState<Measurement[]>([]);
    useFocusEffect(
        React.useCallback(() => {
            getMeasurements().then(measures => {
                setData(measures.slice().reverse());
            }
            );
        }, [])
    );

    async function handleClear() {
        await clearMeasurements();
        setData([]);
    }

    return (
        <Container>
            <Header>Histórico</Header>
            {data.length === 0 ? (
                <Text style={{ color: theme.colors.primary, fontFamily: theme.fonts.regular, paddingHorizontal: 32 }}>
                    Nenhuma medição registrada.
                </Text>
            ) : (
                <FlatList
                    bounces={false}
                    contentContainerStyle={{ paddingBottom: 24 }}
                    data={data}
                    keyExtractor={(_, idx) => idx.toString()}
                    renderItem={({ item }) => (
                        <HistoryItem>
                            <HistoryCard
                                datetime={item.date}
                                locality={item.location}
                                humity={item.humidity}
                                inclination={item.inclination}
                            />
                        </HistoryItem>
                    )}
                />
            )}
            <ButtonWrapper>
                <SubmitButton
                    text="Limpar histórico"
                    onClick={handleClear}
                />
            </ButtonWrapper>
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
    padding: 72px 0;
    background-color: ${theme.colors.background};
    gap: 24px;
`;

const ButtonWrapper = styled.SafeAreaView`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 16px 32px 24px 32px;
    background-color: ${theme.colors.background};
`;

const Header = styled.Text`
    padding: 0 32px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.bold};
    font-size: 28px;
    margin-bottom: 8px;
`;

const HistoryItem = styled.View`
    padding: 0 32px;
    margin-bottom: 24px;
`;

export default History;