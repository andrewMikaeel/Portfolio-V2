import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() { }
  lines;
  ngOnInit(): void {
    this.lines = document.getElementsByClassName('line')
    // console.log(this.lines[0].childNodes.length);
    let j = 0;
    for(let i = 0; i < this.lines.length; i++){
      for (let n = 0; n < this.lines[i].childNodes.length; n++){
        this.lines[i].childNodes[n].style.animationDelay = `${j*75}ms`
        j++;
      }
    }
    
    
    
  }

}
