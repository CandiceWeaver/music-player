import styled from "styled-components";
import { View } from "react-native";
import { FlexProps, LayoutProps, flex, layout } from "styled-system";

export interface ContainerProps extends LayoutProps, FlexProps {}

const Container = styled(View)<ContainerProps>`
  ${layout}
  ${flex}
`;

export default Container;
