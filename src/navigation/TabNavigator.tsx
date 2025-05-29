import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import theme from '../styles/theme';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeWithFormStack() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
            {/* Formulário de nova medição aqui */}
        </HomeStack.Navigator>
    );
}

export default function TabRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: theme.colors.background,
                    paddingTop: 6,
                    height: 80,
                    borderTopWidth: 0.5,
                    borderTopColor: '#ddd',
                },
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeWithFormStack}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Histórico"
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        Alert.alert('Histórico', 'Funcionalidade ainda não implementada.');
                    },
                }}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="time-outline" size={size} color={color} />
                    ),
                }}
            >
                {() => null}
            </Tab.Screen>
            <Tab.Screen
                name="Reportar"
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        Alert.alert('Reportar', 'Funcionalidade ainda não implementada.');
                    },
                }}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="alert-circle-outline" size={size} color={color} />
                    ),
                }}
            >
                {() => null}
            </Tab.Screen>
        </Tab.Navigator>
    );
}