class List {
  clickedMenu = null; 
  menu = [];
  self = undefined;

  constructor(self){
    this.self = self;
  }
  
  get getSelf(){
    return this.self;
  }

  get getClickedMenu(){
    return this.clickedMenu
  }

  setClickedMenu(element) {
    this.clickedMenu = element;
  }

  clickMenu(element){
    this.clickedMenu = element;
  }

  addList(card){
    this.menu = [...this.menu, card];
  }
  
}