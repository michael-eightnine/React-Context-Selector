import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  kind?: "default" | "warn";
  onClick: () => void;
};

const Button = ({ children, kind = "default", onClick }: Props) => (
  <button className={`button button--${kind}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
