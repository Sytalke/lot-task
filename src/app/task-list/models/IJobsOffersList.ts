import { IJob } from "./IJob";

export interface IJobsOffersList {
    count: number;
    jobs: IJob[];
    limit: number;
    offset: number;
}