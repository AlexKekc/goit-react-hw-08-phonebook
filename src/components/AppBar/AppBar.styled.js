import styled from '@emotion/styled';

export const AppBarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

export const ContactsSection = styled.section`
  display: grid;
  gap: ${p => p.theme.space[4]}px;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;

export const FilterSection = styled.section`
  display: grid;
  gap: ${p => p.theme.space[4]}px;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
`;

export const ContactsTitle = styled.h3`
  margin: 0;
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.Bold};

  color: ${p => p.theme.colors.primaryText};
`;

export const FilterTitle = styled.h3`
  margin: 0;
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.Bold};

  color: ${p => p.theme.colors.primaryText};
`;
