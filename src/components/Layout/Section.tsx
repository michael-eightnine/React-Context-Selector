import { ReactNode } from "react";
import { PrimaryContextProvider } from "../../context/PrimaryContext";
import ContextDisplay from "../Context/ContextDisplay";

type Props = {
  children: ReactNode;
  description: string;
  title: string;
};

const Section = ({ children, description, title }: Props) => (
  <PrimaryContextProvider>
    <section className="section">
      <ContextDisplay />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="section__content">{children}</div>
    </section>
  </PrimaryContextProvider>
);

export default Section;
