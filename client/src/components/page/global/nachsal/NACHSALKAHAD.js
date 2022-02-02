import Axios from "axios";
import React, { useState, useEffect } from "react";
import domain from "../../../../util/domain";
import NACHSALTBKAHAD from "./nachsaltable/TACHSALTBKAHAD";

export default function NACHSALKAHAD() {
  const [datas, setData] = useState();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const getQ = async () => {
      const res = await Axios.get(`${domain}/user/getNachsal`);
      setData(res.data);
      setReady(true);
    };
    getQ();
  }, []);

  return (
    ready && (
      <>
        <br />
        <br />
        <br />
        <NACHSALTBKAHAD data={datas} />
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
