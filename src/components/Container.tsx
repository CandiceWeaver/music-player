import styled from 'styled-components'
import { View } from 'react-native'
import {
  ColorProps,
  FlexProps,
  FlexboxProps,
  LayoutProps,
  color,
  flex,
  flexbox,
  layout,
} from 'styled-system'

export interface ContainerProps
  extends LayoutProps,
    FlexProps,
    ColorProps,
    FlexboxProps {}

const Container = styled(View)<ContainerProps>`
  ${layout}
  ${flex}
  ${color}
  ${flexbox}
`

export default Container
