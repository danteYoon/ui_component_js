class Card {
  element;
  id;
  context;
  
  constructor(element){
    this.element = element || null;
    this.context = element.children[0].textContent || null;
  }
  
  get getElement() {
    return this.element;
  }

  get getContext() {
    return this.context;
  }

  hasClassName(className){
    const nameList = this.element.className.split(" ") || [];
    const classNameIndex = nameList.indexOf(className);
    if(classNameIndex === -1){
      return false;
    }
    return true;
  }

  toggle(){
    if(this.hasClassName("open")){
      this.removeClassName("open")
    } else {
      this.addClassName("open");
    }
  }

  addClassName(className){
    this.getElement.className += " " + className;
  }

  removeClassName(className){
    const nameList = this.element.className.split(" ") || [];
    const classNameIndex = nameList.indexOf(className);
    nameList.splice(classNameIndex,1)
    this.element.className = nameList.join(" ");
  }
}

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

class Popup{
  hovered = false;
  text = "";
  parent = null;

  get getText(){
    return this.text;
  }

  setText(text){
    this.text = text;
  }

  toggle(target){
    if(!document.getElementById("popup")){
      this.draw(target);
    }
    else {
      this.remove();
    }
  }

  draw(target){
    const pop = document.createElement("div");
    pop.id = "popup";
    const newContent = document.createTextNode(this.getText);
    pop.appendChild(newContent);
    target.after(pop);
  }

  remove(){
    const willCloseElement = document.getElementById("popup");
    if(willCloseElement){
      willCloseElement.remove();
    }
  }
}

function something(){
  const listElement = document.getElementsByClassName("wrapper")[0];
  const cardElements = document.getElementsByClassName("item");
  const list = new List(listElement);
  const popup = new Popup();

  Array.prototype.forEach.call(cardElements, (item) => {
    const card = new Card(item);

    item.addEventListener("click", function(event){
      if(card.hasClassName("open")){
        card.removeClassName("open");
        popup.remove();
        list.setClickedMenu(null);
      } else{
        if(list.getClickedMenu){
          list.getClickedMenu.removeClassName("open");
        }
        list.setClickedMenu(card);
        card.addClassName("open");
        popup.remove();
        popup.setText(card.getContext);
        popup.draw(card.getElement);
      }

    });
  });

  // card 밖을 누르면 닫힘
  document.addEventListener("click", function(event){
    if(!list.self.contains(event.target)){
      list.getClickedMenu.removeClassName("open");
      list.setClickedMenu(null);
      popup.remove();
    }
  })
}

// Write Javascript code here!
if(document.addEventListener){
  document.addEventListener("DOMContentLoaded", function(){
    domReady();
  });
} else if(document.attachEvent){
  document.attatchEvent("onreadystatechange", function(){
    if(document.readyState === "complete"){
      document.detachEvent("onreadystatechange", arguments.callee);
      domReady();
    }
  })
}

function domReady(){
  something();
}