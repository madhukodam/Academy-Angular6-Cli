import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Branch } from 'src/app/models/branch';

@Component({
  selector: 'app-program-display',
  templateUrl: './program-display.component.html',
  styleUrls: ['./program-display.component.css']
})
export class ProgramDisplayComponent implements OnInit {

  @Input() branch: Branch;

  @Output() notify: EventEmitter<Branch> = new EventEmitter<Branch>();


  constructor() { }

  ngOnInit() {
    console.log(this.branch);
  }
  handleClick() {
    this.notify.emit(this.branch);
  }

}
