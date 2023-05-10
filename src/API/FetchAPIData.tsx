import axios from "axios";
import { useEffect, useState } from 'react';
import TilsynModel from "../Models/TilsynModel";
import TilsynListMultiEntry from "../Components/TilsynListMultiEntry";


// Component that fetch from the API every time the value in the input search box changes
// Returns a sorted list of the lates results

type ChildProps = {
  search: string;
  setSearch: (search: string) => void; 
}


function FetchAPIData(props: ChildProps) {

  const[data, setData] = useState<TilsynModel | undefined>(undefined); 

  // console.log(data);
  // console.log(`props.search = ${props.search}`)

  useEffect(() => {
    async function fetch() {
      
      const response = await axios.get(`https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?query=${props.search}`);
      const data: TilsynModel = response.data;
      setData(data); 

      return data; 
    }
    fetch(); 
    //console.log(fetch());
  }, [props.search])

  if (!data) {
    return <div>Loading...</div>;
  }

  
    
    

  return (
    <div className="flex justify-center">
        <TilsynListMultiEntry tilsyn={data}></TilsynListMultiEntry>
    </div>
  );
}

export default FetchAPIData;