/* export default process.env.NODE_ENV === "development"
  ? "http://180.212.224.167:10004"
  : process.env.NODE_ENV === "production" &&
    "http://180.212.224.167:3000"; */ //////// לשביל /////////

export default process.env.NODE_ENV === "development"
  ? "http://localhost:10004"
  : process.env.NODE_ENV === "production" && "https://trackishi.herokuapp.com";
