import styled from '@emotion/styled';

export const RegForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
`;

export const RegLabel = styled.label`
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const RegInput = styled.input`
  display: flex;
  width: 250px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  border: ${p => p.theme.borders.bold};
  border-color: ${p => p.theme.colors.transparentGray};
  outline: none;

  font-size: ${p => p.theme.fontSizes.s};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.normal};

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border-color: ${p => p.theme.colors.blue};
  }
`;

export const RegButton = styled.button`
  max-width: 130px;

  margin-top: ${p => p.theme.space[4]}px;

  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3), 5px 5px 5px rgba(0, 0, 0, 0.1),
    2px 2px 2px rgba(0, 0, 0, 0.3);

  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  color: ${p => p.theme.colors.primaryText};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};
  }
`;
