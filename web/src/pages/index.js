import React from 'react'
import styled from 'styled-components'

import { mediaQueries } from '../theme'
import Layout from '../components/layout'
import SEO from '../components/seo'
import KH from '../components/images/kh'
import KHLijmEnCultuur from '../components/images/khLijmEnCultuur'

const BigTitle = styled('div')`
  margin-top: 32px;
  font-size: 22px;
  font-family: Free Pixel;

  @media ${mediaQueries.tablet} {
    font-size: 36px;
  }

  @media ${mediaQueries.laptop} {
    font-size: 40px;
  }
`

const Title = styled('div')`
  margin-top: 32px;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;

  @media ${mediaQueries.tablet} {
    font-size: 32px;
  }

  @media ${mediaQueries.laptop} {
    font-size: 36px;
  }
`

const ImageContainer = styled('div')`
  max-width: 90%;
  width: 90%;
  margin: 32px auto 0 auto;
`

const IndexPage = () => (
  <Layout>
    <SEO />
    <BigTitle>
      Games in Concert, een interactief concert waar jij kan gamen op de klanken
      van de Kleine Harmonie!
    </BigTitle>
    <br />
    <br />
    Op 7 november zal dit muziekevenement worden uitgevoerd in Lijm en Cultuur.
    Het zal geen standaard uitvoering gaan worden waar de enige rol van het
    publiek is om te luisteren naar de muziek van het orkest. Maar het gaat een
    grote spelshow worden waar het publiek de kans krijgt om te gamen tijdens
    het concert. De spellen die voorbij zullen komen variëren van de populaire
    telefoonspellen tot de klassieke computergames en de ouderwetse klassiekers.
    <ImageContainer>
      <KHLijmEnCultuur />
    </ImageContainer>
    <Title>Locatie</Title>
    De Centrale van Lijm en Cultuur zal tijdens dit concert omgebouwd worden tot
    het theater van de games. De grote industriële hal biedt veel flexibiliteit
    voor de inrichting van ons concert waardoor we het orkest en de gamers goed
    samen kunnen spelen.
    <Title>Wie is de Kleine Harmonie?</Title>
    De Kleine Harmonie is een onderdeel van{' '}
    <a href="https://harmoniekapel.nl/" target="_blank">
      De Koninklijke Harmoniekapel Delft
    </a>
    . Door de jaren heen is de Kleine Harmonie gegroeid tot een compleet
    zelfstandig orkest van ruim 50 muzikanten. De niet meer zo “Kleine” Harmonie
    bestaat uit een mix van studenten en volwassenen van diverse leeftijden die
    allen samen met veel plezier gevarieerde en toegankelijke muziek willen
    maken en nu dus ook voor het Games in Concert.
    <ImageContainer>
      <KH />
    </ImageContainer>
    <Title>Kaartverkoop</Title>
    De kaartverkoop is nog niet gestart, hou deze pagina in de gaten voor meer
    informatie.
    <Title>Praktische informatie</Title>
    <InfoRow label="Datum">7 november 2020</InfoRow>
    <InfoRow label="Adres">
      Lijm en Cultuur
      <br />
      Rotterdamseweg 272
      <br />
      2628 AT Delft
    </InfoRow>
  </Layout>
)

const InfoRow = ({ label, children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
    }}
  >
    <div
      style={{
        fontWeight: 700,
        flex: 1,
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <span>{label}:</span>
    </div>
    <div style={{ display: 'flex', flex: 2 }}>
      <span>{children}</span>
    </div>
  </div>
)

export default IndexPage
