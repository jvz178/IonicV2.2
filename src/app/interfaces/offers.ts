export interface Offers{
    success: boolean;
    data: Data[];
    message: string;
}
export interface Data{
    id: number;
    headline:string;
    description: string;
    cicle_id: number;
    data_max: string;
    num_candidates:number;
}