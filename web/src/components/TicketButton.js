import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

const StyledContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 32,
});
const StyledBorder = styled('div')({
  border: `2px solid ${colors.yellow}`,
  padding: 2,
  display: 'flex',
  borderStyle: 'dotted',
});
const StyledA = styled('a')({
  backgroundColor: colors.yellow,
  padding: 16,
  color: `${colors.darkBlue} !important`,
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  transition: 'all .2s ease-in-out',
  ':hover': {
    backgroundColor: colors.blue,
    // color: `${colors.yellow} !important`,
  },
  '@media only screen and (max-width: 600px)': {
    fontSize: '1rem',
  },
});

const TicketButton = ({ href }) => (
  <StyledContainer>
    <StyledBorder>
      <StyledA target="_blank" href={href}>
        Koop nu je kaartje!
      </StyledA>
    </StyledBorder>
  </StyledContainer>
);

export default TicketButton;
