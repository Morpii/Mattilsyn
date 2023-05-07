import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import EntriesModel from "../EntriesModel";
import TilsynModel from "../TilsynModel";


interface Props {
  tilsyn: TilsynModel;
}

const TilsynList: React.FC<Props> = ({ tilsyn }) => {
  return (
    // <div>
    //   {tilsyn.entries.map((entry: EntriesModel) => (
    //     <div key={entry.tilsynid} className="card">
    //       <h2>{entry.navn}</h2>
    //       <p>{entry.poststed}</p>
    //       <p>{entry.dato}</p>
    //       <p>{entry.total_karakter}</p>
    //     </div>
    //   ))}
    // </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Navn</TableCell>
            <TableCell align="right">Dato</TableCell>
            <TableCell align="right">Poststed</TableCell>
            <TableCell align="right">Total karakter</TableCell>
            
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {tilsyn.entries.map((row) => (
            <TableRow
              key={row.tilsynid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.navn}
              </TableCell>
              <TableCell align="right">{`${row.dato.substring(0,2)}.${row.dato.substring(2,4)}.${row.dato.substring(4)}`}</TableCell>
              <TableCell align="right">{row.poststed}</TableCell>
              <TableCell align="right">{row.total_karakter}</TableCell>
              
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TilsynList;