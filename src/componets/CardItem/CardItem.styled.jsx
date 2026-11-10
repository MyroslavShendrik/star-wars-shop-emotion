import styled from "@emotion/styled";

export const ItemTitle = styled.h3`
  margin-bottom: 12px;
  padding: 12px 16px;
  font-size: 32px;
  text-align: center;
  border-radius: 8px;
  background-color: yellow;
  color: blue;
`;

export const ImageTitle = styled.h4`
  text-align: center;
  font-style: italic;
`;

export const TextField = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const TextFieldValue = styled.span`
  font-weight: 400;
  font-style: italic;
`;

export const AdditionalImageBox = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 8px;
  border-radius: 8px;
  background-color: gray;
`;

export const AdditionalImage = styled.img`
  max-width: calc((100% - 10px) / 2);
  border-radius: 14px;
`;

export const Button = styled.button`
  width: 70%;
  margin: 20px auto;
  padding: 16px 32px;
  display: inline-block;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow";
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 12px;
  color: #ffffff;
  background-color: #008080;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2),
    4px 4px 8px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 16px 8px rgba(0, 0, 0, 0.3),
    0 8px 16px rgba(0, 0, 0, 0.9);
`;