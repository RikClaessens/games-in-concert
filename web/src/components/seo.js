/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function SEO({ lang, meta }) {

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title="Games in Concert | Kleine Harmonie Delft"
      meta={[
        {
          name: `description`,
          content: 'Games in Concert is een interactief concert van de Kleine Harmonie waar jij kan gamen op de klanken van je favoriete gamemuziek!',
        },
        {
          property: `og:title`,
          content: 'Games in Concert | Kleine Harmonie Delft',
        },
        {
          property: `og:description`,
          content: 'Games in Concert is een interactief concert van de Kleine Harmonie waar jij kan gamen op de klanken van je favoriete gamemuziek!',
        },
        {
          property: `og:image`,
          content: `https://games-in-concert.harmoniedelft.nl/images/banner.png`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
