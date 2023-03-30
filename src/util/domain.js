const domain =
  process.env.NODE_ENV !== "development"
    ? "http://localhost:6555"
    : "http://localhost:6555";

export default domain;
