import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  renderCount: number;
};

const Card = ({ children, title, renderCount }: Props) => (
  <div className="card">
    <h3 className="card__header" key={renderCount}>
      {title} <span>{renderCount}</span>
    </h3>
    <div className="card__inner">
    {children}
    </div>
  </div>
);

export default Card;
