import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useSound from 'use-sound'

import pacmanSound from '../sounds/pacman_chomp.wav'

import './layout.css'
import Background from './Background'
import Top from './Top'
import Bottom from './Bottom'
import Mid from './Mid'
import { mediaQueries } from '../theme'

const Layout = ({ children }) => {
  const topContainer = useRef(null)

  const [playPacmanSound] = useSound(pacmanSound)

  const handleClick = event => {
    const { clientX, clientY } = event

    const topRect = topContainer.current.getBoundingClientRect()

    const leftOfPacman = 0.895833333
    const rightOfPacman = 0.982638889
    const topOfPacman = 0.785555556
    const bottomOfPacman = 0.943333333

    const leftXOfPacman = leftOfPacman * topRect.width + topRect.left
    const rightXOfPacman = rightOfPacman * topRect.width + topRect.left
    const topYOfPacman = topOfPacman * topRect.height + topRect.top
    const bottomYOfPacman = bottomOfPacman * topRect.height + topRect.top

    // console.log({
    //   leftXOfPacman,
    //   rightXOfPacman,
    //   topYOfPacman,
    //   bottomYOfPacman,
    //   topRect,
    //   pageX,
    //   pageY,
    //   screenX,
    //   screenY,
    //   clientX,
    //   clientY,
    // })

    if (
      clientX >= leftXOfPacman &&
      clientX <= rightXOfPacman &&
      clientY >= topYOfPacman &&
      clientY <= bottomYOfPacman
    ) {
      playPacmanSound()
    } else {
      console.log('🔴')
    }
  }

  return (
    <Background>
      <div
        style={{
          margin: `0 auto`,
          width: 1440,
          maxWidth: '80%',
        }}
      >
        <TopContainer onClick={handleClick} ref={topContainer}>
          <Top />
        </TopContainer>
        <Mid>
          <Container>
            <span style={{ marginTop: -100, pointerEvents: 'none' }}>
              {children}
            </span>
          </Container>
        </Mid>
        <Bottom />
      </div>
    </Background>
  )
}

const TopContainer = styled('div')`
  margin-bottom: -10%;
  pointer-events: all;
`

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
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
