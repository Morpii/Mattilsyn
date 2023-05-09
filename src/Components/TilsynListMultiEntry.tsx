import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import EntriesModel from "../Models/EntriesModel";
import TilsynModel from "../Models/TilsynModel";
import { useEffect, useState } from "react";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import DateConverter from "../Utils/DateConverter";
import DateFormatter from "../Utils/DateFormatter";


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
    
    // useEffect(() => {
    //     console.log(`LastEntry array: ${JSON.stringify(lastEntry)}`);
    // }, [lastEntry]);

    
    if(lastEntry === undefined){
        return <div>Loading...</div>
    }
    
    function findSmiley(entry: EntriesModel) {
        if(!entry){
            return <div>Loading...</div>
        }
        const totalScore: number = Number(entry.total_karakter); 
        if(totalScore === 0 || totalScore === 1){
            return <SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>
        }
        if(totalScore === 2){
            return <SentimentNeutralIcon></SentimentNeutralIcon>
        }
        if(totalScore === 3){
            return <SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon>
        }
    }

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Navn</TableCell>
                <TableCell align="right">Dato</TableCell>
                <TableCell align="right">Poststed</TableCell>
                <TableCell align="right">Adresse</TableCell>
                <TableCell align="right">Smiley</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {lastEntry
                    .map((row) => (
                        <TableRow
                            key={row.sakref}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.navn}
                            </TableCell>
                            <TableCell align="right">{DateFormatter(row.dato)}</TableCell>
                            <TableCell align="right">{row.poststed}</TableCell>
                            <TableCell align="right">{row.adrlinje1}</TableCell>
                            <TableCell align="right">{findSmiley(row)}</TableCell>
                        </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default TilsynListMultiEntry;
