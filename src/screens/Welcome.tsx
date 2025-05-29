import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import SubmitButton from '../components/SubmitButton';

// React Navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const Welcome = () => {
    const navigation = useNavigation<NavigationProps>();
    return (
        <GradientContainer
            colors={['#F5F5F5', '#8CCBFF']}
            start={{ x: 0.8, y: 0.2 }}
            end={{ x: 0, y: 1 }}
        >
            <Logo source={require('../../assets/logo.png')} />
            <SubmitButton text='Aceder ao painel' onClick={() => navigation.navigate('Main')} />
        </GradientContainer>
    );
};

const GradientContainer = styled(LinearGradient)`
  flex: 1;
  padding: 76px 40px;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const Logo = styled.Image.attrs({
    resizeMode: 'contain',
})`
  height: 148px;
  aspect-ratio: 1.9;
`;


export default Welcome;