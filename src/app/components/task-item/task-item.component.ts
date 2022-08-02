import { Component, Input, OnInit, Output,  EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ReadKeyExpr } from '@angular/compiler';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {


  @Input() task : Task;
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
@Output() onReadyTask: EventEmitter<Task> = new EventEmitter();


  faTimes = faTimes;
  faCheck = faCheck;

  constructor() { }

  onDelete(task){
    this.onDeleteTask.emit(task);
  }
  onReady(task){
    this.onReadyTask.emit(task);
  }

  ngOnInit(): void {
  }

}
