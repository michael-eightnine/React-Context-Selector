import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  renderCount: number;
};

const Card = ({ children, title, renderCount }: Props) => (
  <div className="card">
    <h3 className="card__header" key={renderCount}>
      {title} <span>Render Count: {renderCount}</span>
    </h3>
    <div className="card__main">{children}</div>
  </div>
);

export default Card;
