import styled from "@emotion/styled";

import { getBgColorEmotion } from "@/utils";

export const List = styled.ul`
  margin-left: ${({ theme }) => theme.spacing(2.5)};
  margin-right: ${({ theme }) => theme.spacing(2.5)};
  padding: ${({ theme }) => theme.spacing(2.5)};
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ theme }) => theme.sizes.cardMinWidth}, 1fr)
  );
  gap: ${({ theme }) => theme.spacing(8)};
  outline: 1px solid ${({ theme }) => theme.colors.border.list};
`;

export const Item = styled.li`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(2.5)};
  outline: 1px solid ${({ theme }) => theme.colors.border.item};
  background-color: ${getBgColorEmotion};
`;
