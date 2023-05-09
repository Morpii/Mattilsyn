
export default function DateConverter(date: string){
    return Number(date.slice(4, 8) + date.slice(2, 4) + date.slice(0, 2))
}