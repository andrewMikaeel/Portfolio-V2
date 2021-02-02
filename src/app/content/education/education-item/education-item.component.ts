import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Education } from '../education.model';



@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent implements OnInit{
  @Input() educationId: number;
  @Input() education: Array<Education>;
  @Output() educationSelected = new EventEmitter<Number>();
  
  constructor() {
  }

  ngOnInit(): void {
    if(this.education[this.educationId].selected)
      this.educationSelected.emit(this.educationId);
  }
  
  onClick() {
    this.educationSelected.emit(this.educationId);
  }
}
