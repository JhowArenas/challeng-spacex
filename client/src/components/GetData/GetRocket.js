import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ROCKET } from "../../graphQL/Queries";

function GetRocket(props) {
  const { error, loading, data } = useQuery(LOAD_ROCKET, { variables: { props } });
  const [rocket, setRocket] = useState([]);

  

  useEffect(() => {

    if (loading) return 'Carregando.....';
    if (error) return `Error! ${error}`;

    if (data) {  setRocket(data.getRocket); }

  }, [data]);

  return (
    <div>
      {" "}
      {rocket.map((val) => {
        return <h1> {val.id} - {val.name} - {val.description} </h1>
      })}
    </div>
  );
}

export default GetRocket;
