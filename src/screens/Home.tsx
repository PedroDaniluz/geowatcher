import { View, Text } from "react-native";

const Home = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                Home Screen
            </Text>
        </View>
    );
}

export default Home;