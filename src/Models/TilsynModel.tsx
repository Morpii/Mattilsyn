import EntriesModel from "./EntriesModel";

export default interface TilsynModel{
    entries: EntriesModel[]; 
    page: number;
    pages: number; 
    posts: number; 
}