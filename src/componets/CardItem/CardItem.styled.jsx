import styled from "@emotion/styled";

export const ItemTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.fontSizes.itemTitle};
  text-align: center;
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors.bg.itemTitle};
  color: ${({ theme }) => theme.colors.font.itemTitle};
`;

export const ImageTitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  font-style: italic;

  svg {
    color: ${({ theme }) => theme.colors.icon.imageTitle};
  }
`;

export const TextField = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

//! Обгортка для іконки перед назвою поля
export const FieldIcon = styled.span`
  display: inline-flex;
  margin-right: ${({ theme }) => theme.spacing(2)};
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.icon.textField};
`;

export const TextFieldValue = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-style: italic;
`;

export const FeatureList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};

  svg {
    flex-shrink: 0;
    margin-top: ${({ theme }) => theme.spacing(1)};
    color: ${({ theme }) => theme.colors.icon.feature};
  }
`;

export const AdditionalImageBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2.5)};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors.bg.additionalImageBox};
`;

export const AdditionalImage = styled.img`
  max-width: calc((100% - ${({ theme }) => theme.spacing(2.5)}) / 2);
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const Button = styled.button`
  width: ${({ theme }) => theme.sizes.buttonWidth};
  margin: ${({ theme }) => theme.spacing(5)} auto;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(8)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  font-family: ${({ theme }) => theme.fontFamily.button};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.button};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.font.button};
  background-color: ${({ theme }) => theme.colors.bg.button};
  cursor: pointer;
  text-shadow: ${({ theme }) => theme.shadows.buttonText};
  box-shadow: ${({ theme }) => theme.shadows.button};
  transition: background-color ${({ theme }) => theme.transition};

  svg {
    color: ${({ theme }) => theme.colors.icon.button};
    transition: color ${({ theme }) => theme.transition};
  }

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.bg.buttonHover};

    svg {
      color: ${({ theme }) => theme.colors.icon.buttonHover};
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.border.buttonFocus};
    outline-offset: 2px;
  }
`;
