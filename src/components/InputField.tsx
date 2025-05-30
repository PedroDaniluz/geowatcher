import { View } from "react-native";
import styled from "styled-components/native";
import theme from "../styles/theme";

interface InputFieldProps {
    title: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    isNumeric?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    title,
    placeholder,
    value,
    onChangeText,
    isNumeric = false,
}) => {
    return (
        <View>
            <Title>
                {title}
            </Title>
            <StyledInput
                inputMode={isNumeric ? "numeric" : "text"}
                maxLength={isNumeric ? 2 : undefined}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#717171"
            />
        </View>
    );
};

const Title = styled.Text`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.medium};
    font-size: 16px;
    margin-bottom: 8px;
`;

const StyledInput = styled.TextInput`
    width: 100%;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.regular};
    font-size: 14px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.primary};
    padding-bottom: 8px;
`;

export default InputField;