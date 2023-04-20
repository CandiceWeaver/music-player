import React from 'react'
import Container from '../components/Container'
import StyledText from '../components/StyledText'
import Ionicons from 'react-native-vector-icons/Ionicons'
import theme from '../../GlobalTheme'

const MusicPlayer = () => {
  return (
    <Container
      flex={1}
      backgroundColor={theme.colors.grey[0]}
      alignItems='center'
      justifyContent='center'>
      <Ionicons name='heart-outline' size={30} />
      <StyledText>React Native Music Player</StyledText>
    </Container>
  )
}

export default MusicPlayer
