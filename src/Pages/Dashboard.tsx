import {Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function Dashboard(){
    
    const [resturantNavn, setResturantNavn] = useState("");

    const handleButtonCLick = () => {
        
    }

    return (
        <>
            <header>Søk etter resturant og deres siste mattilsyn</header>
            <TextField
                    id="outlined-helperText"
                    size="small"
                    label="Resturant"
                    defaultValue=""
                    placeholder="Skriv inn resturant her"
                    value={resturantNavn}
                    helperText=""
                    InputLabelProps={{
                        style: { 
                            fontFamily: 'quicksand', 
                            fontSize: '16px' }
                    }}
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
                <SearchIcon></SearchIcon>
            </Button>
            
        </>
    )
}