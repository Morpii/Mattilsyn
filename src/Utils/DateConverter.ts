
// Function that convert the date to a "flipped" format to be compared to easier find the latest

export default function DateConverter(date: string){
    return Number(date.slice(4, 8) + date.slice(2, 4) + date.slice(0, 2))
}