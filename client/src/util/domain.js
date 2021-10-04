export default process.env.NODE_ENV === "development"
  ? "http://localhost:10004"
  : process.env.NODE_ENV === "production" &&
    "XofekX";
