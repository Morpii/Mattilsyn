import EntriesModel from "../Models/EntriesModel";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


// Function that calculates the smiley face according to the score Mattilsynet gave

export default function FindRightSmiley(entry: EntriesModel) {
    if(!entry){
        return <div>Loading...</div>
    }
    const totalScore: number = Number(entry.total_karakter); 
    if(totalScore === 0 || totalScore === 1){
        return <SentimentSatisfiedAltIcon sx={{height: "20%", width: "20%", minHeight: "2rem", minWidth: "2rem", maxHeight: "3rem", maxWidth: "3rem"}}></SentimentSatisfiedAltIcon>
    }
    if(totalScore === 2){
        return <SentimentNeutralIcon sx={{height: "20%", width: "20%", minHeight: "2rem", minWidth: "2rem"}}></SentimentNeutralIcon>
    }
    if(totalScore === 3){
        return <SentimentVeryDissatisfiedIcon sx={{height: "20%", width: "20%", minHeight: "2rem", minWidth: "2rem"}}></SentimentVeryDissatisfiedIcon>
    }
}