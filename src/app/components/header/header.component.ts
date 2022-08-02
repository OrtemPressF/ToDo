import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showAddTask : boolean= true;
  subscription: Subscription;

  title = 'ToDo';

  constructor(private uiService: UIService) {
    this.subscription = this.uiService.onToggle().subscribe(value =>this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  AddTask() {
    this.uiService.addTask();
  }
}
