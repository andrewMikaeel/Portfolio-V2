import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  show = false;
  @ViewChild('buissnessCard', {static: true}) buissnessCard: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onView(e:any){
    if(e.visible && !this.show){
      this.show = true;
      this.changeAnimation();
    }
  }

  async changeAnimation(){
    await this.move(1000);
    this.buissnessCard.nativeElement.animation = 'floating ease-in-out infinite 4s';
    // name duration timing-function delay iteration-count direction fill-mode;

  }

  move (duration:number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, duration);
    });
  } 



}
