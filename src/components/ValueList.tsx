const ValueList = (props: Record<string, any>) => (
  <ul>
    {Object.entries(props).map(([key, value]) => (
      <li key={key}>
        <strong>{key}: </strong>
        {typeof value === "string" ? value : JSON.stringify(value)}
      </li>
    ))}
  </ul>
);

export default ValueList;
