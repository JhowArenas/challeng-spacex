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
        return <Card key= {val.id}>
            <div>
              <h3>{val.name}</h3>{val.name}
           {val.id} - {val.name} - {val.description} 
            </div>
          </Card>
      })}
    </CardList>
  );
}

export default GetRockets;
