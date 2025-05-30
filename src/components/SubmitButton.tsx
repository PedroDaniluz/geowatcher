import { Pressable, Text } from "react-native";
import styled from "styled-components/native";
import theme from "../styles/theme";

interface SubmitButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  onClick,
  disabled = false,
}) => {
  return (
    <Pressable onPress={onClick} style={{ width: '100%' }} disabled={disabled}>
      {({ pressed }) => (
        <StyledButton pressed={pressed}>
          <ButtonText >{text}</ButtonText>
        </StyledButton>
      )}
    </Pressable>
  );
}

const StyledButton = styled.View<{ pressed: boolean }>`
  width: 100%;
    background-color: ${theme.colors.primary};
    padding: 16px 0;
    border-radius: 6px;
    align-items: center;
    opacity: ${({ pressed }) => (pressed ? 0.9 : 1)};
`;

const ButtonText = styled.Text`
    font-size: 14px;
    font-family: ${theme.fonts.semiBold};
    color: ${theme.colors.background};
`;

export default SubmitButton;