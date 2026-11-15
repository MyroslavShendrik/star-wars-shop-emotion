import { useTheme } from "@emotion/react";
import { FaJedi } from "react-icons/fa";

import { Title } from "./Section.styled";

export function Section({ title, children }) {
  const theme = useTheme();

  return (
    <section>
      {title && (
        <Title>
          <FaJedi size={theme.iconSize.xxlg} aria-hidden="true" />
          {title}
        </Title>
      )}
      {children}
    </section>
  );
}
