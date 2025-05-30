import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import styled from 'styled-components/native';
import theme from '../styles/theme';

interface DropdownFieldProps {
    title: string;
    placeholder: string;
    selectedValue: string | null;
    onValueChange: (value: string) => void;
    options: { label: string; value: string | null }[];
}

const DropdownField: React.FC<DropdownFieldProps> = ({ title, selectedValue, onValueChange, options, placeholder }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Dropdown
                containerStyle={{ borderRadius: 8, backgroundColor: theme.colors.background }}
                itemTextStyle={{ color: theme.colors.primary, fontFamily: theme.fonts.regular, fontSize: 14 }}
                selectedTextStyle={{ color: theme.colors.primary, fontFamily: theme.fonts.regular, fontSize: 14 }}
                placeholderStyle={{ color: '#717171', fontFamily: theme.fonts.regular, fontSize: 14 }}
                data={options}
                labelField="label"
                valueField="value"
                placeholder={placeholder}
                value={selectedValue}
                onChange={(item) => onValueChange(item.value)}
            />
        </Container>
    );
};

const Container = styled(View)`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.primary};
    padding-bottom: 8px;
`;

const Title = styled(Text)`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.medium};
    font-size: 16px;
    margin-bottom: 8px;
`;

export default DropdownField;
