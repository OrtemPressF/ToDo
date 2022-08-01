import { Component, OnInit } from '@angular/core';
// import { TASKS } from 'src/app/alltasks';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  
  constructor(private taskSerrvice: TaskService) { }

  ngOnInit(): void {
    this.taskSerrvice.getTasks().subscribe((tasks)=>this.tasks= tasks);
  }

}
