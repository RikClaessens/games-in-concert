import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({
  className,
  children,
  sounds,
  theRef,
  handleClick,
}) => (
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
    render={(data) => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          alt=""
          onClick={(event) =>
            handleClick({
              event,
              sounds,
              ref: theRef,
            })
          }
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

const Background = styled(BackgroundSection)`
  background-position: center top;
  opacity: 1;
  &:after {
    background-size: contain !important;
    background-repeat: repeat-y !important;
  }
`;

export default Background;
