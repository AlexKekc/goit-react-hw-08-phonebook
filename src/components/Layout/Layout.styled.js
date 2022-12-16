import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const Header = styled.header`
  margin: 0 auto;
  border-bottom: ${p => p.theme.borders.bold};
`;

export const PageContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-top: ${p => p.theme.borders.bold};
  padding-top: ${p => p.theme.space[3]}px;
`;

export const FooterLink = styled.a`
  color: ${p => p.theme.colors.primaryText};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.yellow};
  }
`;

export const FooterText = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.primaryText};
`;
