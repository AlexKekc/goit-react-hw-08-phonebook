import styled from '@emotion/styled';

export const Contacts = styled.ul`
  margin-left: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;
