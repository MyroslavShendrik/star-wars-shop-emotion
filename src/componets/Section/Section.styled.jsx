import styled from "@emotion/styled";

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  font-size: ${({ theme }) => theme.fontSizes.mainTitle};
  text-align: center;
  color: ${({ theme }) => theme.colors.font.mainTitle};

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.icon.title};
  }
`;
