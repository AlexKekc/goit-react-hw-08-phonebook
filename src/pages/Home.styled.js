import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.Bold};

  color: ${p => p.theme.colors.primaryText};
`;

export const HomeText = styled.p`
  text-align: right;
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.primaryText};
`;
