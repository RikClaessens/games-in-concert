import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "arcade-machine.png" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const Background = styled(BackgroundSection)`
  background-size: contain;
  background-repeat: repeat-y;
  background-position: center top;
  color: #fff;
  pointer-events: none;
`

export default Background
