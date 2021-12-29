import React from "react"
import styled from "styled-components"

import { mediaQueries } from "../theme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import KH from "../components/images/kh"
import KHLijmEnCultuur from "../components/images/khLijmEnCultuur"

const BigTitle = styled.div`
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

const Title = styled.div`
  margin-top: 32px;
  font-size: 20px;
  line-height: 1.5;

  @media ${mediaQueries.tablet} {
    font-size: 32px;
  }

  @media ${mediaQueries.laptop} {
    font-size: 36px;
  }
`

const ImageContainer = styled.div`
  max-width: 90%;
  width: 90%;
  margin: 32px auto 0 auto;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Games in Concert" />
    <BigTitle>
      Games in Concert is een interactief concert van de Kleine Harmonie waar
      jij kan gamen op de klanken van je favoriete gamemuziek!
    </BigTitle>
    <br />
    <br />
    Het muziekevenement vindt plaats op 14 mei in Theater de Veste. Dit wordt
    geen standaardconcert waar het publiek alleen luistert naar de muziek van
    het orkest. Het wordt een grote spelshow waar jij als publiek de kans krijgt
    om te gamen tijden het concert! De spellen die voorbij komen variëren van
    populaire telefoonspellen tot klassieke computergames en ouderwetse
    klassiekers. De verschillende publieksteams strijden tegen elkaar om de
    eeuwige roem te veroveren.
    <ImageContainer>
      <KHLijmEnCultuur />
    </ImageContainer>
    <Title>Locatie</Title>
    De theaterzaal van Theater de Veste wordt voor dit concert omgebouwd tot het
    theater van de Games. Met de jarenlange ervaring en sfeer van dit theater
    wordt dit gegarandeerd een succes.
    <Title>Het orkest</Title>
    De Kleine Harmonie is een onderdeel van{" "}
    <a
      href="https://harmoniekapel.nl/"
      target="_blank"
      rel="noopener noreferrer"
    >
      De Koninklijke Harmoniekapel Delft
    </a>
    . Door de jaren heen is het orkest uitgegroeid tot een orkest van ruim 50
    muzikanten. De niet meer zo “Kleine” Harmonie is een gezellig orkest,
    bestaande uit een mix van diverse leeftijdsgroepen, die samen met plezier
    gevarieerde en toegankelijke muziek willen maken.
    < ImageContainer >
      <KH />
    </ImageContainer >
    <Title>Kaartverkoop</Title>
    De kaartverkoop is nog niet gestart. Houd deze pagina in de gaten voor meer
    informatie.
    < Title > Praktische informatie</Title >
    <InfoRow label="Datum">14 mei 2022</InfoRow>
    <InfoRow label="Adres">
      Theater de Veste <br />
      Vesteplein 1, Delft
    </InfoRow>
  </Layout >
)

const InfoRow = ({ label, children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 16,
    }}
  >
    <div
      style={{
        flex: 1,
        justifyContent: "center",
        display: "flex",
      }}
    >
      <span>{label}:</span>
    </div>
    <div style={{ display: "flex", flex: 2 }}>
      <span>{children}</span>
    </div>
  </div>
)

export default IndexPage
