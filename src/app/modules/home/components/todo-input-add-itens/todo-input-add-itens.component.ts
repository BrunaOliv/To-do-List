import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTAskList = new EventEmitter();

  public addItemTaskList: string= "";

  constructor() { }

  ngOnInit() {
  }

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList){
      this.emitItemTAskList.emit(this.addItemTaskList);
    }
    this.addItemTaskList = "";
  }
}
