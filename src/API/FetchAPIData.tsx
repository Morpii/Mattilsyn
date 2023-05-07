import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import ResultCards from "../Components/ResultCards";
import React, { useEffect, useState } from 'react';
import TilsynModel from "../TilsynModel";
import TilsynList from "../Components/TilsynList";


function FetchAPIData() {
  const[data, setData] = useState<TilsynModel | undefined>(undefined); 

  useEffect(() => {
    async function fetch() {
      const response = await axios.get("https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn");
      const data: TilsynModel = response.data;
      setData(data); 
      return data; 
    }
    fetch(); 
    console.log(fetch());
  }, [])

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <TilsynList tilsyn={data}></TilsynList>
    </div>
  );
}

export default FetchAPIData;