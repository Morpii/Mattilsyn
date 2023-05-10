import EntriesModel from "../Models/EntriesModel";

// Function that calculates color based on Mattilsyn score

export default function FindRightColor(entry: EntriesModel){
    const totalScore: number = Number(entry.total_karakter); 
    //Green
    if(totalScore === 0 || totalScore === 1){
        return "#E9FCE9"
    }
    //Yellow
    if(totalScore === 2){
        return "#FFFFB3"
    }
    //Red
    if(totalScore === 3){
        return "#FFCCCC"
    }
}