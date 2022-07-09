import { EpisodeModel } from "./episodeModel";

export class ShowModel {
    id!: number;
    referenceId!: number;
    name!: string;
    permalink!: string;
    startDate!: string;
    endDate!: string;
    country!: string;
    network!: string;
    status!: string;
    imagePath!: string;
    createDate!: string;
  
    episodes: EpisodeModel[] = [];
}