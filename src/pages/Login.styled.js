import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogInContainer = styled.div`
  text-align: left;
`;

export const LogInTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const LogInText = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const LogInLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.xs};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.green};
`;
