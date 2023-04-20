import { Text } from "react-native";
import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

export interface TextProps extends TypographyProps {}

const StyledText = styled(Text)<TextProps>`
  ${typography}
`;

export default StyledText;
