import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <div style={{ width: '100vw', height: '100vh' }}>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            {children}
          </BackgroundImage>
        </div>
      )
    }}
  />
)

const Background = styled(BackgroundSection)`
  width: 100%;
  min-height: 100vh;
  background-size: auto;
  background-color: transparent;
  background-repeat: repeat;
  background-position: center 155%, center, center;
  color: #fff;
`

export default Background
