import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() addTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  note: string;
  day:string;
  constructor() { }

  onSubmit(){
    if(!this.text){
      alert('Add the text');
      return;
    }
    const newTask = {
      text: this.text,
      note: this.note,
      // note: this.note,
      day :this.day
    }
    this.addTask.emit(newTask);

    this.text = '';
    this.note = '';
    this.day = '';

  }
  
  ngOnInit(): void {
  }


}
