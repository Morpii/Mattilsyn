import EntriesModel from "./EntriesModel";

// Model to put the API data in

export default interface TilsynModel{
    entries: EntriesModel[]; 
    page: number;
    pages: number; 
    posts: number; 
}