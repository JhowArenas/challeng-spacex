import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ROCKETS } from "../../graphQL/Queries";
import { CardList, Card } from "../../asset/styles/styles"

function GetRockets() {
  const { error, loading, data } = useQuery(LOAD_ROCKETS);
  const [rockets, setRocket] = useState([]);
  
  useEffect(() => {
    if (loading) return 'Carregando.....';
    if (error) return `Error! ${error}`;
    if (data) {  setRocket(data.getAllRockets); }
  }, [data]);

  return (
    <CardList>
      {rockets.map((val) => {
        return <Card key={val.id} id={val.id}>
            <div className="content">
              <h2>{val.name}</h2>
              <span className="bt-more-info" onClick={() => showInfo(val.id)}>Ver mais</span>
              <div className="more-info">
                <div className='description'>{val.description}</div>
              </div>
            </div>
          </Card>
      })}
    </CardList>
  );
}

function showInfo(params) {
  document.getElementById(params).classList.toggle('show-info');
}

export default GetRockets;

