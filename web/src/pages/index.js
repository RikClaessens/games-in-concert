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
      van de Kleine Harmonie{' '}
    </BigTitle>
    <br />
    <br />
    De Kleine Harmonie zal op 7 november in Lijm en Cultuur haar
    muziekevenement, Games in Concert, uitvoeren. Het zal geen standaard
    uitvoering gaan worden waar de enige rol van het publiek is om te luisteren
    naar de muziek van het orkest. Maar het gaat een grote show worden waar het
    publiek de kans krijgt op te gamen op de klanken van De Kleine Harmonie. De
    spellen die voorbij zullen komen variëren van de populaire telefoonspellen
    tot de klassieke computergames en de ouderwetse klassiekers.
    <Title>Het idee</Title>
    Het concert is ontstaan uit de wens van onze jeugdleden om hun
    leeftijdsgenoten te betrekken en te laten genieten van muziek. Daarmee
    kunnen zij laten zien dat de passie voor het spelen van games net is zoals
    onze passie voor het maken van muziek. De Kleine Harmonie zal dit doen met
    een greep uit de wondere wereld van de meeslepende spelsoundtracks, en hoopt
    zo nieuw publiek te trekken en meer jeugd te interesseren voor
    harmoniemuziek.
    <Title>Hoe werkt het?</Title>
    Tijdens het concert zal het publiek, net zoals bij vele bekende spelshows,
    ingedeeld worden in vakken waar zij de rest van de avond meespelen in
    verschillende gamerondes om zoveel mogelijk punten proberen te verzamelen
    tijdens quizzen, videogames en bordspellen. Daarbij zal de Kleine Harmonie
    de verschillende games van achtergrond muziek voorzien, een speelse muzikale
    quiz met het publiek spelen en afwisselend tussen de rondes zal de Kleine
    Harmonie een aantal stukken gamemuziek uitvoeren. Met mooie, bekende, en
    soms grappige muziek over alles wat met spel en games te maken heeft, zal
    dit concert een interactieve en interessante avond worden.
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
  </Layout>
)

export default IndexPage
