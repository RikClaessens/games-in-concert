import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-plugin-image'

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      top: file(relativePath: { eq: "kh-lijm-en-cultuur.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.top.childImageSharp.fluid} />
}

export default Image
