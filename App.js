import React from "react";
import MusicPlayer from "./src/screens/MusicPlayer";
import Container from "./src/components/Container";

const App = () => {
  return (
    <Container flex={1}>
      <MusicPlayer />
    </Container>
  );
};

export default App;
