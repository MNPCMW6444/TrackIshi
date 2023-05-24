const domain =
  process.env.NODE_ENV !== "development"
    ? "http://localhost:6551"
    : "http://localhost:6551";

export default domain;
