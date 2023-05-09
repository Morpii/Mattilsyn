import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import EntriesModel from "../Models/EntriesModel";
import TilsynModel from "../Models/TilsynModel";
import { useEffect, useState } from "react";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import DateConverter from "../Utils/DateConverter";
import DateFormatter from "../Utils/DateFormatter";
import FindRightSmiley from "../Utils/FindRightSmiley";
import FindRightColor from "../Utils/FindRightColor";


interface Props {
  tilsyn: TilsynModel;
}

const TilsynListMultiEntry: React.FC<Props> = ({ tilsyn }) => {

    const[lastEntry, setLastEntry] = useState<EntriesModel[]>([]);

    function FilterLatestEntry(tilsyn: TilsynModel){
        const latestEntries: {[name: string]: EntriesModel} = {};
        
        tilsyn.entries.forEach((entry) => {
            const currentDate: number = DateConverter(entry.dato)
            const name: string = entry.navn;
            
            if (!latestEntries[name] || currentDate > DateConverter(latestEntries[name].dato))
                {
                    latestEntries[name] = {
                    ...entry,
                    dato: entry.dato,
                };
            }
        });
        setLastEntry(Object.values(latestEntries));
      }


    useEffect(() => {
        setLastEntry([]);
        FilterLatestEntry(tilsyn);
    }, [tilsyn, setLastEntry]);

    
    if(lastEntry === undefined){
        return <div>Loading...</div>
    }

    return (
            <TableContainer component={Paper}
                sx={{
                    width: "80%"
                }}
            >
            <Table sx={{ minWidth: 650, }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{backgroundColor: "#e6e6e6"}}>
                        <TableCell sx={{fontSize: "1.25rem", fontWeight: 'bold'}}>Navn</TableCell>
                        <TableCell align="left" sx={{fontSize: "1.25rem", fontWeight: 'bold'}}>Dato</TableCell>
                        <TableCell align="left" sx={{fontSize: "1.25rem", fontWeight: 'bold'}}>Poststed</TableCell>
                        <TableCell align="left" sx={{fontSize: "1.25rem", fontWeight: 'bold'}}>Adresse</TableCell>
                        <TableCell align="center" sx={{fontSize: "1.25rem", fontWeight: 'bold'}}>Smilefjes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lastEntry
                        .map((row) => (
                            <TableRow
                                key={row.sakref}
                                sx={{ 
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    backgroundColor: FindRightColor(row)
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.navn}
                                </TableCell>
                                <TableCell align="center">{DateFormatter(row.dato)}</TableCell>
                                <TableCell align="left">{row.poststed}</TableCell>
                                <TableCell align="left">{row.adrlinje1}</TableCell>
                                <TableCell align="center">{FindRightSmiley(row)}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>        
    );
};

export default TilsynListMultiEntry;
