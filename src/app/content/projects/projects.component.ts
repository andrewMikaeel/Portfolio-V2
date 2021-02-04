
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import Glide, { 
  Controls,
   Swipe,
   Keyboard,
   Breakpoints} from '@glidejs/glide/dist/glide.modular.esm'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
    this.width = event.target.innerWidth;
    // this.calcCardViews();
    console.log(this.width);
    
  }
  width:number = window.innerWidth;
  items: Array<number> = [];
  projects = [];
  glide;
  cardViews:number;
  @ViewChild('glide', {static: true}) gliderEl:ElementRef;

  @ViewChild('projectsContainer', {static: true}) projetcsConatiner: ElementRef;

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 5; i++){
      this.items.push(i);
    }
  this.projects = [
      {
        title: 'Design Must Lead the Way on Artificial Intelligence and Machine Learning',
        description: 'Artificial intelligence and machine learning technology are all around us...',
        img: './../../../assets/code.jpg',
        category: 'project-category',
        next: null,
        previous: null
      },
      {
        title: 'Design Must Lead the Way on Artificial Intelligence and Machine Learning',
        description: 'Artificial intelligence and machine learning technology are all around us...',
        img: './../../../assets/code.jpg',
        category: 'project-category',
        next: null,
        previous: null
      },
      {
        title: 'Design Must Lead the Way on Artificial Intelligence and Machine Learning',
        description: 'Artificial intelligence and machine learning technology are all around us...',
        img: './../../../assets/code.jpg',
        category: 'project-category',
        next: null,
        previous: null
      },
      {
        title: 'Design Must Lead the Way on Artificial Intelligence and Machine Learning',
        description: 'Artificial intelligence and machine learning technology are all around us...',
        img: './../../../assets/code.jpg',
        category: 'project-category',
        next: null,
        previous: null
      },
      {
        title: 'Design Must Lead the Way on Artificial Intelligence and Machine Learning',
        description: 'Artificial intelligence and machine learning technology are all around us...',
        img: './../../../assets/code.jpg',
        category: 'project-category',
        next: null,
        previous: null
      },
      {
        title: 'Design Must Lead the Way on Artificial Intelligence and Machine Learning',
        description: 'Artificial intelligence and machine learning technology are all around us...',
        img: './../../../assets/code.jpg',
        category: 'project-category',
        next: null,
        previous: null
      },
    ]
    this.projects[0].next = this.projects[1];
    this.projects[this.projects.length-1].previous = this.projects[this.projects.length-2];
    for (let i = 1; i < this.projects.length -1; i++){
      this.projects[i].next = this.projects[i+1];
      this.projects[i].previous = this.projects[i-1];
    }

    // this.calcCardViews();
  
  }
  ngAfterViewInit(): void {
   this.glide = new Glide(this.gliderEl.nativeElement, {
      perView: 3,
      gap: 10,
      bound: true,
      rewind: true,
      breakpoints: {
        peek: {
          before: 100, 
          after: 100 ,
        },
        700: {
          perView: 1,
          peek: {
            before: 0, 
            after: 5 ,
          },

        },
        1000: {
          perView: 2,
          peek: {
            before: 50, 
            after: 50 ,
          },
        }
      }
      // keyboard: true
    })

    this.mountGlider();
  }
  
  async mountGlider(){
    await this.move(200);
    this.glide.mount( {
      Controls, 
      Swipe,
      Keyboard,
      Breakpoints
    })

  }

  move (duration:number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, duration);
    });
  } 

  onClick(direction:string){
    direction === 'R' ? this.glide.go('>') : this.glide.go('<')
  }
}

  

