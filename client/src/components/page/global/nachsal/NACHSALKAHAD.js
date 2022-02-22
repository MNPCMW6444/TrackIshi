import Axios from "axios";
import React, { useState, useEffect } from "react";
import domain from "../../../../util/domain";
import NACHSALTBKAHAD from "./nachsaltable/TACHSALTBKAHAD";

export default function NACHSALKAHAD() {
  const [datas, setData] = useState();

  const [be, fun] = useState("yetto");

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const getQ = async () => {
      const res = await Axios.get(`${domain}/user/getNachsal`);
      setData(res.data);
      setReady(Math.random());
    };
    getQ();
  }, [be]);

  return (
    ready && (
      <>
        <br />
        <br />
        <br />
        <NACHSALTBKAHAD data={datas} fun={fun} key={ready} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    )
  );
}
