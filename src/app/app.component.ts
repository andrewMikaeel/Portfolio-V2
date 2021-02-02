import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, HostListener } from '@angular/core';
import jump from 'node_modules/jump.js/dist/jump.module.js';

interface menu {
  name: string,
  active: boolean,
  id: string,
  inViewPort: boolean,
  index: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('navLinks') navLinks: ElementRef;
  @ViewChild('profile') profile: ElementRef;
  @ViewChild('content') content: ElementRef;

  links: Array<HTMLElement> = [];
  menu: Array<menu> = [];
  currentSelectedItem: menu;
  navActive: boolean = false;
  aboutClicked: boolean = false;
  clickedMenu: boolean = false;
  inViewPortCount = 0;
  stopeAtMenuIndex: number = 0;
  currentCountMenu:number = 0;
  goingUp:boolean = false;
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(event.key === "Escape")
      this.close();
  }
  constructor() {}

  ngOnInit() {
    this.menu = [
      { name: 'Home', active: false, id: 'home', inViewPort: false, index: 0},
      { name: 'About', active: false, id: 'about', inViewPort: false, index: 1},
      { name: 'Education & Skills', active: false, id: 'education', inViewPort: false, index: 2},
      { name: 'Projects', active: false, id: 'projects', inViewPort: false, index: 3},
      { name: 'Contact', active: false, id: 'contact', inViewPort: false, index: 4},
      { name: 'Résumé', active: false, id: 'resume', inViewPort: false, index: 5},
      { name: 'GitHub', active: false, id: 'github', inViewPort: false, index: 6},
    ]
    this.currentSelectedItem = this.menu[0];
  }

  
  ngAfterViewInit() {
    this.navLinks.nativeElement.childNodes.forEach(link => {
      if(link.tagName === 'LI')
        this.links.push(link);
    });
  }
  
 

  closeAnimation() {
    this.links.forEach((link: HTMLElement) => link.style.animation = '' );
      this.profile.nativeElement.style.animation = '';
      document.body.style.overflowY = 'auto';
      this.navActive = false;
  }

  open() {
    this.profile.nativeElement.style.animation = `navLinkFade 0.5s ease forwards 0s`
    this.links.forEach((link: HTMLElement, index) => link.style.animation = `navLinkFade 0.5s ease forwards ${(index + 1)/ 12}s`);
    this.navActive = true;
    document.body.style.overflowY = 'hidden';
  }
  close(delay?: boolean) {
    delay ? setTimeout(() => this.closeAnimation(), 150) : this.closeAnimation();
  }
  toggle(){
    this.navActive ? this.close() : this.open();
  }
  
  overlayClick(){
    if (!this.navActive) return;
    this.close();
  }

  onMenuClick(menuItem: menu, mobile: boolean){
    this.clickedMenu = true;

    if(menuItem.index > this.currentSelectedItem.index){
      this.stopeAtMenuIndex = menuItem.index - this.currentSelectedItem.index;
      this.goingUp = false;
    }
    else {
      this.stopeAtMenuIndex = this.currentSelectedItem.index - menuItem.index;
      this.goingUp = true;
    }
    this.currentCountMenu = 0;
    
    if(this.menu[1] === menuItem)
      this.aboutClicked = true;
    else 
      this.aboutClicked = false;

    if (menuItem.active){
      this.smoothScroll(menuItem, mobile)
      this.close(true);
      return;
    }else {
      this.currentSelectedItem.active = false;
      this.currentSelectedItem = menuItem;
      this.smoothScroll(menuItem, mobile);
      menuItem.active = true;
      this.currentSelectedItem.name = menuItem.name;
    }
      this.close(true);
  }
  
  inViewPort(menuItemIndex:number, e:any){
    this.menu[menuItemIndex].inViewPort = e.visible;

    //Initialy this function run for each section
    if(this.inViewPortCount < 5){
      if(e.visible){
        this.currentSelectedItem.active = false;
        this.currentSelectedItem = this.menu[menuItemIndex];
        this.currentSelectedItem.active = true;
      }
      this.inViewPortCount++;
      return;
    }


    if(menuItemIndex === 1 && this.menu[1].active && !e.visble && !this.menu[2].inViewPort && this.menu[0].inViewPort){
      if(this.clickedMenu && this.currentCountMenu < this.stopeAtMenuIndex){
        this.currentCountMenu++;
      }else {
        this.changeMenuItem(0);
      }
    }else if((menuItemIndex === 0 || menuItemIndex === 2) &&(!e.visible) && (this.menu[1].inViewPort)){
      if(this.clickedMenu && this.currentCountMenu < this.stopeAtMenuIndex){
        this.currentCountMenu++;
      }else {
        this.changeMenuItem(1);
      }
    }else if ((menuItemIndex === 1 || menuItemIndex == 3) && (!e.visible) && (this.menu[2].inViewPort)){
        if(this.clickedMenu && this.currentCountMenu < this.stopeAtMenuIndex){
          if(this.aboutClicked)
            this.aboutClicked = false;
          this.currentCountMenu += 2;
        }else {
          this.changeMenuItem(2);
        }
    }else if ((menuItemIndex === 4 || menuItemIndex === 2)&&(!e.visible) && (this.menu[3].inViewPort)) {
      if(this.clickedMenu && this.currentCountMenu < this.stopeAtMenuIndex){
        this.currentCountMenu++;
      }else {
        this.changeMenuItem(3);
      }
    }else if(menuItemIndex === 4 && e.visible && (this.menu[4].inViewPort)){
      if(this.clickedMenu && this.currentCountMenu < this.stopeAtMenuIndex){
        this.currentCountMenu++;
      }else {
        this.changeMenuItem(4);
      }
    } 
  }

  changeMenuItem(newIndex) {
    this.currentSelectedItem.active = false;
    this.currentSelectedItem = this.menu[newIndex];
    this.currentSelectedItem.active = true;
    this.clickedMenu = false;
  }

  smoothScroll (menuItem:menu, mobile: boolean) {
    if(menuItem.active)
      return;
    jump('#'+menuItem.id, {offset: -50});
  }

  goToProjects(){
    this.onMenuClick(this.menu[3], false);
  }

  onLogoClick() {
    this.onMenuClick(this.menu[0], false);
  }

  bodyClicked(){
  }

}