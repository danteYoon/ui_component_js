class List {
  clickedMenu = null; 
  menu = [];
  self;

  constructor(self){
    this.self = self;
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