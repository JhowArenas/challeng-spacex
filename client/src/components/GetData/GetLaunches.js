import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_LAUNCHES } from "../../graphQL/Queries";
import { CardList, Card } from "../../asset/styles/styles"

function GetLaunches() {
  const { error, loading, data } = useQuery(LOAD_LAUNCHES);
  const [launches, setLaunches] = useState([]);
  
  useEffect(() => {
    if (loading) return 'Carregando.....';
    if (error) return `Error! ${error}`;
    if (data) {  setLaunches(data.getAllLaunches); }
  }, [data]);

  return (
    <CardList>
      {launches.map((val) => {
        return <Card key={val.id} id={val.id}>
            <div className="content">
              <h2 className="title">{val.name}</h2>
              <p>Flight Number: {val.flight_number}</p>
              <p className="data">Data: {getDate(val.static_fire_date_utc)}</p>
              <span className="bt-more-info" onClick={() => showInfo(val.id)}>Ver mais</span>
              <div className="more-info">
                <div className='description'>{val.details}</div>

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

function getDate(params) {
    if(params != '' && params != null){
        var dateSplit = params.substr(0, 10).split('-');
        var date = dateSplit[2] + '/' + dateSplit[1] + '/' + dateSplit[0]
        return date;
    }else{
        return 'Sem Data'
    }
}

export default GetLaunches;

