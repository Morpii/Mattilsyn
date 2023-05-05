import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ResultCards from "../Components/ResultCards";
import React from 'react';
import TilsynModel from "../TilsynModel";


async function FetchAPIData() {

    
  const response = await axios.get("https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn");
  const data: TilsynModel[] = response.data; 
  console.log(data);

// function FetchAPIData() {

//   async function getData() {
//     const response = await axios.get("https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn");
//     const data: TilsynModel[] = response.data; 
//     return data; 
//   }


  return (
    <div>
        hei
        <ResultCards cards={data}></ResultCards>
    </div>
  );
}

export default FetchAPIData;