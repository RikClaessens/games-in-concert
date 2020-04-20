import React from 'react'
import styled from 'styled-components'

import { mediaQueries } from '../theme'
import Layout from '../components/layout'
import SEO from '../components/seo'
import KH from '../components/images/kh'
import KHLijmEnCultuur from '../components/images/khLijmEnCultuur'
import Dots from '../images/dots.svg'

const Title = styled('div')`
  margin-top: 32px;
  font-size: 20px;
  line-height: 1.5;

  @media ${mediaQueries.tablet} {
    font-size: 32px;
  }

  @media ${mediaQueries.laptop} {
    font-size: 48px;
  }
`

const ImageContainer = styled('div')`
  max-width: 60%;
  width: 60%;
  margin: 32px auto 0 auto;
  border-style: dotted;
  border-color: rgba(213, 126, 0, 1);
  border-image-source: url(${Dots});
  border-image-slice: 33% 33%;
  border-image-repeat: round;
  border-width: 12px;
`

const IndexPage = () => (
  <Layout>
    <SEO />
    <i>
      Games in Concert, een interactief concert waar jij kan gamen op de klanken
      van de Kleine Harmonie{' '}
    </i>
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
    Harmonie een aantal stukken gamemuziek uitvoeren. <br />
    <br />
    Bij de verschillende gamerondes zal of het hele publiek meespelen bij de
    quizzen of zullen enkele deelnemers uit de verschillende vakken het op het
    podium tegen elkaar opnemen, met de klanken van de ‘Kleine’ Harmonie op de
    achtergrond. Met mooie, bekende, en soms grappige muziek over alles wat met
    spel en games te maken heeft, zal dit concert een interactieve en
    interessante avond worden.
    <ImageContainer>
      <KHLijmEnCultuur />
    </ImageContainer>
    <Title>Locatie</Title>
    De Centrale van Lijm en Cultuur zal tijdens dit concert omgebouwd worden tot
    het theater van de games. De grote industriële hal biedt veel flexibiliteit
    voor de inrichting van ons concert waardoor we het orkest en de gamers goed
    samen kunnen spelen.
    <Title>Kaartverkoop</Title>
    De kaartverkoop is nog niet gestart, hou deze pagina in de gaten voor meer
    informatie.
    <Title>Wie is de Kleine Harmonie?</Title>
    De Kleine Harmonie is een onderdeel van De Koninklijke Harmoniekapel Delft.
    Oorspronkelijk opgericht als aspirantenorkest van de Kapel, maar inmiddels
    zijn wij uitgegroeid tot een compleet zelfstandig orkest van ruim 50
    muzikanten. De niet meer zo “Kleine” Harmonie bestaat uit een mix van
    studenten en volwassenen van diverse leeftijden die allen samen met veel
    plezier gevarieerde en toegankelijke muziek willen maken en nu dus ook voor
    het Games in Concert.
    <ImageContainer>
      <KH />
    </ImageContainer>
  </Layout>
)

export default IndexPage
