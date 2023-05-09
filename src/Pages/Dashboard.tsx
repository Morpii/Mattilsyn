import {TextField } from "@mui/material";
import { useState } from "react";
import FetchAPIData from "../API/FetchAPIData";
import SearchIcon from '@mui/icons-material/Search';

export default function Dashboard(){
    
    const [search, setSearch] = useState("");


    //console.log(search);

    return (
        <>
            <header className="flex flex-col m-10 text-3xl">
                <p className="text-3xl flex justify-center font-semibold">Finn siste tilsynsresultater på spisesteder,</p>
                <p className="text-3xl flex justify-center font-semibold">data hentet direkte fra Mattilsynet</p>
            </header>
            <p className="flex justify-center">Søk etter spisested, adresse, kommune og få Mattilsynet sin smilefjes-score!</p>
            <p className="flex justify-center">Hvert resultat er fargekodet etter Mmattilynet sin vurdering.</p>

            <div className="flex justify-center mt-5 mb-6">
               <TextField
                    id="outlined-helperText"
                    size="small"
                    label="Søk her"
                    placeholder="Skriv inn resturant, adresse, kommune"
                    value={search}
                    helperText=""
                    sx={{
                        width: "33%"
                    }}
                    InputLabelProps={{
                        style: { 
                            fontSize: '16px',
                         }
                    }}
                    onChange={((e) => setSearch(e.target.value))}
                /> 
            </div>
            
            <FetchAPIData search={search} setSearch={setSearch}></FetchAPIData>
        </>
    )
}