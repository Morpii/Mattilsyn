// import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from "@mui/material";
// import EntriesModel from "../Models/EntriesModel";
// import TilsynModel from "../Models/TilsynModel";
// import { useEffect, useState } from "react";
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';




export default {
    // first draft, only shows one result. This is the latest 
    // record of an inspection, and not the latest for each resturant
} 



// interface Props {
//   tilsyn: TilsynModel;
// }

// const TilsynList: React.FC<Props> = ({ tilsyn }) => {

//     const[lastEntry, setLastEntry] = useState<EntriesModel | undefined>(undefined);

//     function FilterLatestEntry(tilsyn: TilsynModel){
//         let latestDate: number = 0; 

//         tilsyn.entries.map((entry) => {
//             const currentDate = Number(entry.dato.slice(4, 8) + entry.dato.slice(2, 4) + entry.dato.slice(0, 2));

//             if(currentDate > latestDate){
//                 latestDate = currentDate;
//                 setLastEntry(entry); 
//             }
            
//          })  
//     }
    
//     useEffect(() => {
//         FilterLatestEntry(tilsyn); 
//     },[tilsyn]); 

    
//     if(lastEntry === undefined){
//         return <div>Loading...</div>
//     }
    
//     function findSmiley() {
//         if(!lastEntry){
//             return <div>Loading...</div>
//         }
//         const totalScore: number = Number(lastEntry.total_karakter); 
//         if(totalScore === 0 || totalScore === 1){
//             return <SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>
//         }
//         if(totalScore === 2){
//             return <SentimentNeutralIcon></SentimentNeutralIcon>
//         }
//         if(totalScore === 3){
//             return <SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon>
//         }
//     }
 

//     return (
//         <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//             <TableRow>
//                 <TableCell>Navn</TableCell>
//                 <TableCell align="right">Dato</TableCell>
//                 <TableCell align="right">Poststed</TableCell>
//                 <TableCell align="right">Total karakter</TableCell>
//                 <TableCell align="right">Smiley</TableCell>
//             </TableRow>
//             </TableHead>
//             <TableBody>
//             {/* {tilsyn.entries
//                 // .filter((row) => {
//                 //     if(resturantNavn.toLowerCase() === ""){
//                 //         return row; 
//                 //     } else{
//                 //         return row.navn.toLowerCase().includes(resturantNavn);
//                 //     }
//                 // })
//                 .map((row) => (
//                     <TableRow
//                     key={row.tilsynid}
//                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                     >
//                     <TableCell component="th" scope="row">
//                         {row.navn}
//                     </TableCell>
//                     <TableCell align="right">{`${row.dato.substring(0,2)}.${row.dato.substring(2,4)}.${row.dato.substring(4)}`}</TableCell>
//                     <TableCell align="right">{row.poststed}</TableCell>
//                     <TableCell align="right">{row.total_karakter}</TableCell>
//                     </TableRow>
//                 ))} */}
//                 <TableRow
//                     key={lastEntry.tilsynid}
//                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                     >
//                     <TableCell component="th" scope="row">
//                         {lastEntry.navn}
//                     </TableCell>
//                     <TableCell align="right">{`${lastEntry.dato.substring(0,2)}.${lastEntry.dato.substring(2,4)}.${lastEntry.dato.substring(4)}`}</TableCell>
//                     <TableCell align="right">{lastEntry.poststed}</TableCell>
//                     <TableCell align="right">{lastEntry.total_karakter}</TableCell>
//                     <TableCell align="right">{findSmiley()}</TableCell>
//                 </TableRow>
//             </TableBody>
//         </Table>
//         </TableContainer>
//     );
// };

// export default TilsynList;