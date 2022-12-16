import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;

export const PhonebookContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-right: ${p => p.theme.borders.normal};
  border-left: ${p => p.theme.borders.normal};
`;

export const PhonebookTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.Bold};

  color: ${p => p.theme.colors.primaryText};
`;

export const ContactsTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.l};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.Bold};

  color: ${p => p.theme.colors.primaryText};
`;
