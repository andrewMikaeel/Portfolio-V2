import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { faAngular, faCss3, faHtml5, faJsSquare, faSass, faPython, faJava, faNode} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
// import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
// import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
// import z

interface ball{
  container:HTMLElement;
  ball:HTMLElement;
  open: boolean;
  x:number;
  y:number;
  index:number;
  // count:number;
  // icon:FaIcon;
}

interface FaIcon {
  icon: any,
  name: string
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  angular = faAngular;
  javascript = faJsSquare;
  css = faCss3;
  html = faHtml5;
  sass = faSass;
  python = faPython;
  java = faJava;
  SQL = faDatabase;
  node = faNode;
  @ViewChild('iconContainer1', {static: true}) iconContainer1: ElementRef;
  @ViewChild('iconContainer2', {static: true}) iconContainer2: ElementRef;
  @ViewChild('iconContainer3', {static: true}) iconContainer3: ElementRef;
  @ViewChild('iconContainer4', {static: true}) iconContainer4: ElementRef;
  // icons: Array<FaIcon> = [];
  icons= [];
  numBalls = [];
  balls = [];
  openIindex:number = null;
  show = false;
  constructor() { }

  ngOnInit(): void {
    // this.icons = [
    //   this.angular,
    //   this.javascript,
    //   this.css,
    //   this.html,
    //   this.sass,
    //   this.python,
    //   this.java
    // ]
    this.icons = [
      { icon: this.angular, name: 'Angular', open: false},
      { icon: this.javascript, name: 'JavaScript', open: false},
      { icon: this.css, name: 'CSS3', open: false},
      { icon: this.html, name: 'HTML5', open: false},
      { icon: this.sass, name: 'Sass', open: false},
      { icon: this.python, name: 'Python', open: false},
      { icon: this.java, name: 'Java', open: false},
      { icon: this.SQL, name: 'SQL', open: false},
      { icon: this.node, name: 'NodeJs', open: false},
  ]
    let j = 0;
    for(let i = 0; i < 36; i++){
      if(j > this.icons.length-1)
        j = 0;
      this.numBalls.push(Object.assign({}, this.icons[j]));
      j++;
    }

    // for(let i = 0; i < 30; i++){
    //   this.numBalls.push(i);
    // }
    
  }

  ngAfterViewInit(): void {
    for (let i = 0; i < this.numBalls.length; i++){
      let contaier = document.getElementById(`${i}`);
      let ballDiv = document.getElementById('ball-'+i)
      
      let ball:ball = {
        container: contaier,
        ball: ballDiv,
        open: false,
        x: ballDiv.getBoundingClientRect().x,
        y: ballDiv.getBoundingClientRect().y,
        index:i
      }
      this.balls.push(ball);
      // requestAnimationFrame(()=> this.moveBallRandom(ball));
      this.moveBallRandom(ball);
      // console.log(this.iconContainer1.nativeElement);
      
      // this.moveIcon(this.iconContainer1.nativeElement);
      // this.moveIcon(this.iconContainer2.nativeElement);
      // this.moveIcon(this.iconContainer3.nativeElement);
      // this.moveIcon(this.iconContainer4.nativeElement);
    }
  }
  // async onMoveBall (e:Event) {
    // let ballDiv = e.target;
    // ballDiv.style.transition = 'all 150ms ease-in-out';
    // let x = Math.random() * (33 - 20) + 20;
    // let y = Math.random() * (33 - 20) + 20;
    // ballDiv.style.left = x + 'px';
    // ballDiv.style.top = y + 'px';
    // ballDiv.style.transform = `translate(${x}px, ${y}px)`;
    // ballDiv.style.transform = `translateX(${x}px)`;
    // ballDiv.style.transform = `translateY(${y}px)`;
    // await this.move(145);
    // ballDiv.style.transition = 'all 575ms ease-in-out';
  // }
  async moveIcon(icon:HTMLElement){
    await this.move(575);
    let x = Math.random() * (20 - (-20)) + (-20);
    let y = Math.random() * (20 - (-20)) + (-20);
    icon.style.transform = `translate(${x}px, ${y}px)`;
    this.moveIcon(icon);
  }

  async moveBallRandom (ball:ball){
    await this.move(575);
    let x = Math.random() * (5 - (-5)) + (-5);
    let y = Math.random() * (5 - (-5)) + (-5);
    ball.ball.style.transform = `translate(${x}px, ${y}px)`;
    // requestAnimationFrame(()=> this.moveBallRandom(ball), 575);
    this.moveBallRandom(ball);
  }

  move (duration:number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, duration);
    });
  } 
  
  
  onClickSkill(e:Event, i:number) {
    if (this.openIindex !== null && i !== this.openIindex)
      this.numBalls[this.openIindex].open = false;
    else  
      this.openIindex = i;
    
    if(this.numBalls[i] === true)
      this.openIindex = null;
    else 
      this.openIindex = i;

    this.numBalls[i].open = !this.numBalls[i].open;
  }

  onView(e:any){
    if(e.visible){
      this.show = true;
    }
  }
}
