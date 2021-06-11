import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { faChevronLeft, faCamera, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faAppStore } from '@fortawesome/free-brands-svg-icons';
import Glide, { 
  Controls,
   Swipe,
   Keyboard,
   Breakpoints} from '@glidejs/glide/dist/glide.modular.esm'


interface UICard {
  UIElement: HTMLElement,
  open: boolean
}

@Component({
  selector: 'app-projects-landing',
  templateUrl: './projects-landing.component.html',
  styleUrls: ['./projects-landing.component.scss']
})
export class ProjectsLandingComponent implements OnInit {
  constructor() { }
  glide;
  projects = [];
  currentProject = 0;
  arrowLeft = faChevronLeft;
  camera = faCamera;
  appStore = faAppStore;
  arrowUp = faArrowUp;
  projectLinks;
  projectsUI:Array<HTMLElement> = [];
  @ViewChild('glide', {static: true}) gliderEl: ElementRef;
  @ViewChild('texts', {static: true}) textsEl: ElementRef;
  @ViewChild('myProjects', {static: true}) projectsEl: ElementRef;
  @ViewChild('typing', {static: true}) typing: ElementRef;

  UITexts:UICard;
  UIProjects:UICard;
  @Output('seeProjectsClicked') seeProjects= new EventEmitter<any>();

  ngOnInit(): void {

    // this.projects = [
    //   './../../assets/sorting.svg',
    //   './../../assets/weather.svg',
    //   './../../assets/shopping.svg',
    //   // './../../assets/music.svg',
    //   // './../../assets/netflix.svg',
    //   // './../../assets/battleship.svg'
    // ];

    this.projects = [
      {class: 'weather', img: './../../assets/Stellaris-Clapper-board.svg'},
      {class: 'sorting', img: './../../assets/sorting.svg'},
      {class: 'netflix', img: './../../assets/netflix.svg'},
      // {class: 'movie', img: './../../assets/netflix.svg'},
    ]

    this.projectLinks = [
      'https://shoppies-5b855.firebaseapp.com',
      'https://xenodochial-kare-dde6be.netlify.app/',
      'https://netflix-clone-9fb80.web.app'
    ]

    this.UIProjects = {
      UIElement: this.projectsEl.nativeElement,
      open: false
    }
    this.UITexts = {
      UIElement: this.textsEl.nativeElement,
      open: true
    }

    
  }

  ngAfterViewInit(): void {
    this.glide = new Glide(this.gliderEl.nativeElement, {
      perView: 1,
      gap: 0,
      rewind: true,
      keyboard: true,
      bound: true,
    })
    this.currentProject = this.glide.index;
    
    for(let i = 0; i < this.projects.length; i++)
      this.projectsUI.push(document.getElementById(`proj-${i}`));
      requestAnimationFrame(() => this.switchOnInit());
  }

  async switchOnInit(){
    await this.move(200)
    this.glide.mount( {
        Controls, 
        Swipe,
        Keyboard
      });
    await this.move(8100);
    this.typing.nativeElement.style.animation = 'none';
    this.typing.nativeElement.style.transform = 'scale(0)';
    await this.move(2000);
    if(!this.UIProjects.open){
      this.UIProjects.UIElement.style.transform = 'translate(60%, 0)';
      this.UITexts.UIElement.style.transform = 'translate(-40%, 0)';
      await this.move(250);
      this.UIProjects.UIElement.style.zIndex = '2'
      this.UIProjects.UIElement.style.transform = 'translate(0%, 0)'
  
      this.UITexts.UIElement.style.zIndex = '1';
      this.UITexts.UIElement.style.transform = 'translate(10%, 0)'
  
      this.UIProjects.open = !this.UIProjects.open
      this.UITexts.open = !this.UITexts.open
    }
  }

  onClick(direction:string){
    direction === 'R' ? this.glide.go('>') : this.glide.go('<')
  }

  onHover(e:Event, cardHover:string){
    if(cardHover === 'M') {
      if(!this.UITexts.open){
        this.UITexts.UIElement.style.transform = 'translate(20%, 0)';
      }
    }else {
      if(!this.UIProjects.open){
        this.UIProjects.UIElement.style.transform = 'translate(20%, 0)';
      }
    }
  }

   async onCardClick(e:Event, card:string){
    if(card === 'M'){
      if(!this.UITexts.open){
        requestAnimationFrame(async () => {
          this.UITexts.UIElement.style.transform = 'translate(60%, 0)';
          this.UIProjects.UIElement.style.transform = 'translate(-40%, 0)';
          await this.move(250);
          this.UITexts.UIElement.style.zIndex = '2'
          this.UIProjects.UIElement.style.zIndex = '1';
  
          this.UITexts.UIElement.style.transform = 'translate(0%, 0)'
  
          
          this.UIProjects.UIElement.style.transform = 'translate(10%, 0)'
          
          this.UIProjects.open = !this.UIProjects.open;
          this.UITexts.open = !this.UITexts.open;
        })
      }
    }else {
      if(!this.UIProjects.open){
        requestAnimationFrame(async () => {
          this.UIProjects.UIElement.style.transform = 'translate(60%, 0)';
          this.UITexts.UIElement.style.transform = 'translate(-40%, 0)';
          await this.move(250);
  
          this.UIProjects.UIElement.style.zIndex = '2'
          this.UIProjects.UIElement.style.transform = 'translate(0%, 0)'
  
          this.UITexts.UIElement.style.zIndex = '1';
          this.UITexts.UIElement.style.transform = 'translate(10%, 0)'
  
          this.UIProjects.open = !this.UIProjects.open
          this.UITexts.open = !this.UITexts.open;
        });
      }
    }
  }

  onCardHoverLeave(e:Event, card:string) {
    if(card === 'M') {
      if(!this.UITexts.open){
        this.UITexts.UIElement.style.transform = 'translate(10%, 0)';
      }
    }else {
      if(!this.UIProjects.open){
        this.UIProjects.UIElement.style.transform = 'translate(10%, 0)';
      }
    }
  }

  onHoverProject(projectIndex){
    if(this.UIProjects.open){
      
      this.projectsUI[projectIndex].style.transform = 'scale(1.05)';
      this.projectsUI[projectIndex].style.cursor = 'pointer';
    }
  }

  onMouseLeaveProject(projectIndex) {
    if(this.UIProjects.open){
      this.projectsUI[projectIndex].style.transform = 'scale(1)';
      this.projectsUI[projectIndex].style.cursor = 'default';
    }
  }

  move (duration:number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, duration);
    });
  } 

  onSeeProjects() {
    this.seeProjects.emit();
  }

  onClickProject(index:number) {
    if(this.UIProjects.open){
      window.open(this.projectLinks[index], '_blank');
    }

  }

}
