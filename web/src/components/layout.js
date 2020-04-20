import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './layout.css'
import Background from './Background'
import Top from './Top'
import Bottom from './Bottom'
import Mid from './Mid'
import { mediaQueries } from '../theme'

const Layout = ({ children }) => {
  return (
    <Background>
      <div
        style={{
          margin: `0 auto`,
          width: 1440,
          maxWidth: '80%',
        }}
      >
        <TopContainer>
          <Top />
        </TopContainer>
        <Mid>
          <Container>
            <span style={{ marginTop: -100 }}>{children}</span>
          </Container>
        </Mid>
        <Bottom />
      </div>
    </Background>
  )
}

const TopContainer = styled('div')`
  margin-bottom: -10%;
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
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
