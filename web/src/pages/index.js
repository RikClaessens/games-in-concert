import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { mediaQueries } from '../theme';
import Layout from '../components/layout';
import Seo from '../components/seo';

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
`;

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
`;

const ImageContainer = styled.div`
  max-width: 90%;
  width: 90%;
  margin: 32px auto 0 auto;
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Games in Concert" />
    <BigTitle>
      Games in Concert is een interactief concert van de Kleine Harmonie waar
      jij kan gamen op de klanken van je favoriete gamemuziek!
    </BigTitle>
    <br />
    <br />
    Het muziekevenement vindt plaats op 14 mei in Theater de Veste. Dit wordt
    geen standaardconcert waar het publiek alleen luistert naar de muziek van
    het orkest. Het wordt een grote spelshow waar jij als publiek de kans krijgt
    om te gamen tijdens het concert! De spellen die voorbij komen variëren van
    populaire telefoonspellen tot klassieke computergames en ouderwetse
    klassiekers. De verschillende publieksteams strijden tegen elkaar om de
    eeuwige roem te veroveren.
    <ImageContainer>
      <StaticImage src="../images/kh-lijm-en-cultuur.jpg" />
    </ImageContainer>
    <Title>Kaartverkoop</Title>
    De kaartverkoop is gestart! Via{' '}
    <Link
      to="https://www.theaterdeveste.nl/programma/8095/De_Kleine_Harmonie/Games_in_Concert"
      target="_blank"
      rel="noopener"
    >
      deze link van Theater de Veste
    </Link>{' '}
    kun je nú je kaartjes kopen.
    <Title> Praktische informatie</Title>
    <InfoRow label="Datum">14 mei 2022</InfoRow>
    <InfoRow label="Adres">
      Theater de Veste <br />
      Vesteplein 1, Delft
    </InfoRow>
    <InfoRow
      label={
        <span>
          Middag-
          <br />
          concert
        </span>
      }
    >
      Aanvang 16:00
      <br />
      €10 jeugd, studenten en CJP
      <br />
      €12,50 volwassenen
      <br />
    </InfoRow>
    <InfoRow
      label={
        <span>
          Avond-
          <br />
          concert
        </span>
      }
    >
      Aanvang 20:15
      <br />
      €12,50 jeugd, studenten en CJP
      <br />
      €15 volwassenen
      <br />
    </InfoRow>
    <br />
    Het middagconcert is een verkorte versie van het avondconcert en zal maar
    een uurtje duren tot 17:00. Het avond concert zal in totaal rond de twee uur
    duren. Tijdens het avondconcert zullen er meer verschillende games worden
    gespeeld. Wil je graag de kans krijgen om op het podium een spel te kunnen
    spelen, zorg er dan voor dat je opvallend gekleed bent en dus makkelijker
    uitgekozen kan worden.
    <br />
    <br />
    Let op: als je een kaart voor een stoel op het balkon koopt dan kun je
    alleen meedoen met de spellen op je mobiele telefoon.
    <Title>Locatie</Title>
    De theaterzaal van Theater de Veste wordt voor dit concert omgebouwd tot het
    theater van de Games. Met de jarenlange ervaring en sfeer van dit theater
    wordt dit gegarandeerd een succes.
    <ImageContainer>
      <StaticImage src="../images/kh.jpg" />
    </ImageContainer>
    <Title>Wat kun je verwachten?</Title>
    Tijdens het concert zal het publiek, net zoals bij vele bekende spelshows,
    ingedeeld worden in vakken waar zij de rest van de avond meespelen in
    verschillende gamerondes. Samen met je vak probeer je zoveel mogelijk punten
    te verzamelen met quizzen, videogames en bordspellen. Daarbij zal de Kleine
    Harmonie de verschillende games van achtergrondmuziek voorzien, maar tussen
    de rondes ook zelf verschillende gamemuziek uitvoeren met alleen de focus op
    de muziek.
    <br />
    <br />
    Bij een aantal gamerondes zullen enkele deelnemers uit de verschillende
    vakken het op het podium tegen elkaar opnemen, met de klanken van de Kleine
    Harmonie Delft op de achtergrond. Met mooie, bekende en soms grappige muziek
    over alles wat met games te maken heeft, zal dit concert een interactieve en
    interessante avond worden om nooit te vergeten.
    <Title>Het orkest</Title>
    De Kleine Harmonie is een onderdeel van{' '}
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
  </Layout>
);

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
);

export default IndexPage;
