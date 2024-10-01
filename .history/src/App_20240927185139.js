import React from 'react';
import LogoImage from './img/slider/logo.png'
import { 
  Container, 
  AreaImgBackground, 
  Header,
  LogoImg,
} from './stylesGlobal';

const App = () => {
  return (
    <Container>

      <AreaImgBackground>
        <Header>
          <LogoImg src={LogoImage}/>

        </Header>
      </AreaImgBackground>

    </Container>
  );
}

export default App;