import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg.png" }) {
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
        // <BackgroundImage Tag="section" className={className} fluid={imageData}>
        <div style={{ background: `transparent url(${imageData.src})` }} alt="">
          {children}
        </div>
        // </BackgroundImage>
      );
    }}
  />
);

const Background = styled(BackgroundSection)`
  width: 100%;
  min-height: 100vh;
  background-size: auto;
  background-color: transparent;
  background-repeat: repeat;
  background-position: center 155%, center, center;
  color: #fff;
`;

export default Background;
