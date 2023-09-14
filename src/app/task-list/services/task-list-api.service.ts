import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { envApiData } from 'src/app/env-api-data';
import { IJobsOffersList } from '../models/IJobsOffersList';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({ 
    providedIn: 'root' 
})
export class TaskListApiService {

    constructor(private httpClient: HttpClient, private errorService: ErrorHandlerService) {}

    public getJobOffers(): Observable<IJobsOffersList> {
        return this.httpClient.get<IJobsOffersList>(`${envApiData.apiBase}hr/v3/offers/list/pl`).pipe(
            catchError(error => {
                this.errorService.handleError();
                return throwError(() => new Error(error.message));
            })
        )
    }
    

}