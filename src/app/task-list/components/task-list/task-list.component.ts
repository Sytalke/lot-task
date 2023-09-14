import { Component, OnInit } from '@angular/core';
import { TaskListApiService } from '../../services/task-list-api.service';
import { Observable, pluck } from 'rxjs';
import { IJob } from '../../models/IJob';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public jobOffersList$: Observable<IJob[]>

  constructor(private taskListApiService: TaskListApiService) { }

  ngOnInit(): void {
    this.jobOffersList$ = this.taskListApiService.getJobOffers().pipe(pluck('jobs'));
  }

}
