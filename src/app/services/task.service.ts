import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { TASKS } from 'src/app/alltasks';
import { Task } from 'src/app/Task';
import { from, Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
    // const tasks = of(TASKS);
    // return tasks;
  }


  deleteTask(task: Task): Observable<Task>
  {
const url = `${this.apiUrl}/${task.id}`;
return this.http.delete<Task>(url);
  }

  addTask(task: Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task,httpOptions);
  }
}
