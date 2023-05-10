
// Function that format the date from ddmmyyyy to dd.mm.yyyy

export default function DateFormatter(date: string){
    return `${date.substring(0,2)}.${date.substring(2,4)}.${date.substring(4)}`; 
}