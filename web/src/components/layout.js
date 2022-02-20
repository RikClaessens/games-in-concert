import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useSound from 'use-sound';

// sounds
import {
  pacman,
  blinky,
  pinky,
  inky,
  clyde,
  smbOneUp,
  smbCoin,
  smbVine,
  smbJump,
  smbMarioDie,
  smbPowerUp,
  zeldaSecret,
  sonic,
  pokemon,
  marioKart,
  angryBirds,
  donkeyKong,
  playsoundIfClicked,
} from './sounds';

import './layout.css';
import Background from './Background';
import { Top } from './Top';
import Bottom from './Bottom';
import Mid from './Mid';
import { mediaQueries } from '../theme';

const Layout = ({ children }) => {
  const topContainer = useRef(null);
  const bottomContainer = useRef(null);

  const [playPacmanSound] = useSound(pacman.sound);
  const [playBlinkySound] = useSound(blinky.sound);
  const [playPinkySound] = useSound(pinky.sound);
  const [playInkySound] = useSound(inky.sound);
  const [playClydeSound] = useSound(clyde.sound);

  const topContainerSounds = [
    { ...pacman, playSound: playPacmanSound },
    { ...blinky, playSound: playBlinkySound },
    { ...pinky, playSound: playPinkySound },
    { ...inky, playSound: playInkySound },
    { ...clyde, playSound: playClydeSound },
  ];

  const [playSmbOneUpSound] = useSound(smbOneUp.sound);
  const [playSmbCoinSound] = useSound(smbCoin.sound);
  const [playSmbJumpSound] = useSound(smbJump.sound);
  const [playSmbVineSound] = useSound(smbVine.sound);
  const [playSmbMarioDieSound] = useSound(smbMarioDie.sound);
  const [playSmbPowerUpSound] = useSound(smbPowerUp.sound);
  const [playZeldaSecretSound] = useSound(zeldaSecret.sound);
  const [playSonicSound] = useSound(sonic.sound);
  const [playPokemonSound] = useSound(pokemon.sound);
  const [playMarioKartSound] = useSound(marioKart.sound);
  const [playAngryBirdsSound] = useSound(angryBirds.sound);
  const [playDonkeyKongSound] = useSound(donkeyKong.sound);

  const bottomContainerSounds = [
    { ...smbOneUp, playSound: playSmbOneUpSound },
    { ...smbCoin, playSound: playSmbCoinSound },
    { ...smbJump, playSound: playSmbJumpSound },
    { ...smbVine, playSound: playSmbVineSound },
    { ...smbMarioDie, playSound: playSmbMarioDieSound },
    { ...smbPowerUp, playSound: playSmbPowerUpSound },
    { ...zeldaSecret, playSound: playZeldaSecretSound },
    { ...sonic, playSound: playSonicSound },
    { ...pokemon, playSound: playPokemonSound },
    { ...marioKart, playSound: playMarioKartSound },
    { ...angryBirds, playSound: playAngryBirdsSound },
    { ...donkeyKong, playSound: playDonkeyKongSound },
  ];

  const handleClick = ({ event, ref, sounds }) => {
    sounds.forEach((target) =>
      playsoundIfClicked({
        event,
        ref,
        ...target,
      }),
    );
  };

  return (
    <Background>
      <Wrapper>
        <TopContainer
          onClick={(event) =>
            handleClick({
              event,
              sounds: topContainerSounds,
              ref: topContainer,
            })
          }
          ref={topContainer}
        >
          <Top />
        </TopContainer>
        <Mid>
          <Container>
            <span style={{ marginTop: -100 }}>{children}</span>
          </Container>
        </Mid>
        <BottomContainer
          onClick={(event) =>
            handleClick({
              event,
              sounds: bottomContainerSounds,
              ref: bottomContainer,
            })
          }
          ref={bottomContainer}
        >
          <Bottom />
        </BottomContainer>
      </Wrapper>
    </Background>
  );
};

const Wrapper = styled('div')`
  max-width: 98%;
  margin: 0 auto;
  width: 1440px;

  @media ${mediaQueries.tablet} {
    max-width: 90%;
  }

  @media ${mediaQueries.laptop} {
    max-width: 70%;
  }
`;

const TopContainer = styled('div')`
  margin-bottom: -5%;
  pointer-events: all;
`;

const BottomContainer = styled('div')`
  pointer-events: all;
`;

const Container = styled('div')`
  font-family: 'Free Pixel';
  font-size: 14px;
  line-height: 1.1;
  max-width: 60%;
  width: 60%;
  margin: 0 auto;
  background-size: contain;
  background-repeat: repeat-y;
  background-position: center top;
  color: #fff;
  text-align: justify;

  @media ${mediaQueries.tablet} {
    font-size: 18px;
  }

  @media ${mediaQueries.laptop} {
    font-size: 24px;
  }

  a {
    color: #efed6f;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
