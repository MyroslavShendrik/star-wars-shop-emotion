import css from "./Section.module.css";

import {Title} from "./Section.styled"

export function Section({ title, children }) {
  return (
    <section>
      {title && (
        <Title>
          {title}
        </Title>
      )}
      {children}
    </section>
  );
}


