import axios from "axios";
import { useEffect, useState } from 'react';
import TilsynModel from "../TilsynModel";
import TilsynList from "../Components/TilsynList";


type ChildProps = {
  search: string;
  setSearch: (search: string) => void; 
}


function FetchAPIData(props: ChildProps) {

  const[data, setData] = useState<TilsynModel | undefined>(undefined); 

  console.log(data);
  console.log(`props.search = ${props.search}`)

  useEffect(() => {
    async function fetch() {
      
      const response = await axios.get(`https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?query=${props.search}`);
      const data: TilsynModel = response.data;
      setData(data); 
      return data; 
    }
    fetch(); 
    console.log(fetch());
  }, [props.search])

  if (!data) {
    return <div>Loading...</div>;
  }

  
    
    

  return (
    <div>
        {/* <TextField
            id="outlined-helperText"
            size="small"
            label="Resturant"
            placeholder="Skriv inn resturant her"
            value={resturantNavn}
            helperText=""
            InputLabelProps={{
                style: { 
                    fontFamily: 'quicksand', 
                    fontSize: '16px' }
            }}
        onChange={((e) => setResturantNavn(e.target.value))}
        />
        <Button
            sx={{
                borderRadius: 35,
                height: 18,
                backgroundColor: "#C3F0CA",
                fontFamily:"quicksand",
                fontWeight: "bold",
                padding: "18px 36px",
                fontSize: "16px",
                color: "black",
                ":hover": {
                    bgcolor: "#91DCC1"
                }
            }}
            onClick={handleButtonCLick}
        >
         </Button> */}
        {/* <SearchIcon></SearchIcon> */}
        <TilsynList tilsyn={data}></TilsynList>
        {/* <FilterLatestEntry tilsyn={data}></FilterLatestEntry> */}
    </div>
  );
}

export default FetchAPIData;