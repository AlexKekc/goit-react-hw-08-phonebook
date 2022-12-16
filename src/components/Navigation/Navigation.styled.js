import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;

export const NavAuthWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const Nav = styled(NavLink)`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.primaryText};
  :hover,
  :focus {
    color: ${p => p.theme.colors.red};
  }
`;
