import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Education } from './education.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus, faGraduationCap } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationItems: Education[] = [];
  selectedId: number = 0;
  graduation = faGraduationCap;
  @ViewChild('educationTemplateItems', {static: true}) educationTemplateItems: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.educationItems.push({
      // header: 'BACHELOR OF ENGINEERIRNG',
      header: 'Bachelor of Engineering',
      description: 'Currently in my thrid year at Ontario Tech University, studying software Engineering.',
      points: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, saepe!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, saepe!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, saepe!'],
        selected: false,
        id: 0,
        icon: faPlus
    });
    // this.educationItems.push({
    //   header: 'BACHELOR OF ENGINEERING',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consectetur adipisci quo, quod quisquam id reiciendis temporibus reprehenderit recusandae exercitationem.',
    //   selected: false,
    //   id: 1,
    //   icon: faPlus
    // });
    this.educationItems.push({
      // header: 'HIGH SCHOOL DIPLOMA',
      header: 'High School Diploma',
      description: 'Discovered my passion for programming through two computer science courses taught in Java',
      points: [
        'Recived an Ontario scholar award',],
        selected: false,
        id: 1,
        icon: faPlus
    });
    // this.openEducationItem(document.getElementById(`${this.selectedId}`));
  }

  
  changeItem(itemId: number){
    const currentElement = document.getElementById(`${this.selectedId}`);
    const selecctedElement = document.getElementById(`${itemId}`);
    if(!this.educationItems[this.selectedId].selected){
      this.educationItems[itemId].selected = !this.educationItems[itemId].selected;
      this.educationItems[itemId].selected ? this.educationItems[itemId].icon = faMinus : this.educationItems[itemId].icon = faPlus;
      this.educationItems[itemId].selected ? this.openEducationItem(selecctedElement) : this.closeEducationItem(selecctedElement);

    }else if(this.selectedId === itemId){
      this.educationItems[this.selectedId].selected = !this.educationItems[this.selectedId].selected;
      this.educationItems[this.selectedId].selected ? this.educationItems[this.selectedId].icon = faMinus : this.educationItems[this.selectedId].icon = faPlus;
      this.educationItems[this.selectedId].selected ? this.openEducationItem(currentElement) : this.closeEducationItem(currentElement);
    }
    else {
      this.educationItems[this.selectedId].selected = !this.educationItems[this.selectedId].selected;
      this.educationItems[this.selectedId].selected ? this.educationItems[this.selectedId].icon = faMinus : this.educationItems[this.selectedId].icon = faPlus;
      this.educationItems[this.selectedId].selected ? this.openEducationItem(currentElement) : this.closeEducationItem(currentElement);
      this.educationItems[itemId].selected = !this.educationItems[itemId].selected;
      this.educationItems[itemId].selected ? this.educationItems[itemId].icon = faMinus : this.educationItems[itemId].icon = faPlus;
      this.educationItems[itemId].selected ? this.openEducationItem(selecctedElement) : this.closeEducationItem(selecctedElement);
    }
    this.selectedId = itemId
  }

  closeEducationItem(item: HTMLElement){
    item.style.maxHeight = null;                 
  }

  openEducationItem(item: HTMLElement){
    item.style.maxHeight = item.scrollHeight + 'px';
  }
}
