import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import theme from '../styles/theme';

// Telas
import Home from '../screens/Home';
import NewMeasureForm from '../screens/NewMeasureForm';
import ReportForm from '../screens/ReportForm';
import History from '../screens/History';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeWithFormStack() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="NewMeasureForm" component={NewMeasureForm} />
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
                component={History}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="time-outline" size={size} color={color} />
                    ),
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name="Reportar"
                component={ReportForm}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="alert-circle-outline" size={size} color={color} />
                    ),
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    );
}