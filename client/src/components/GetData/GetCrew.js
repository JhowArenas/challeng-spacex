import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CREW } from "../../graphQL/Queries";
import { CardList, CardCrew } from "../../asset/styles/styles"

function GetCrew() {
  const { error, loading, data } = useQuery(LOAD_CREW);
  const [crew, setCrew] = useState([]);
  
  useEffect(() => {
    if (loading) return 'Carregando.....';
    if (error) return `Error! ${error}`;
    if (data) {  setCrew(data.getAllCrew); }
  }, [data]);

  return (
    <CardList>
      {crew.map((val) => {
        return <CardCrew key={val.id} id={val.id}>
            <div className="content">
              <div className="img"><img src={val.image} alt={val.name} /></div>
              <a href={val.wikipedia} alt={val.name} target="_blank">
                <h2>{val.name}</h2>
                <p>Agencia: { val.agency }</p>
                <p>Status: { val.status }</p>
              </a>
            </div>
          </CardCrew>
      })}
    </CardList>
  );
}

export default GetCrew;

