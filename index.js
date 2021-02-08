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

  addClassName(className){
    const nameList = this.element.className.split(" ") || [];
    const classNameIndex = nameList.indexOf(className); 
    if( classNameIndex === -1){
      this.getElement.className += " " + className;
    }
  }

  removeClassName(className){
    const nameList = this.element.className.split(" ") || [];
    const classNameIndex = nameList.indexOf(className);
    if( classNameIndex !== -1){
      nameList.splice(classNameIndex,1).join(" ");
      this.element.className = nameList;
    }
  }
}

class List {
  clickedMenu = null; 
  menu = [];
  
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

  draw(target){
    const pop = document.createElement("div");
    pop.id = "popup";
    const newContent = document.createTextNode(this.getText);
    pop.appendChild(newContent);
    target.appendChild(pop);
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
      // list 처리
      if(list.getClickedMenu){
        list.getClickedMenu.removeClassName("open");
      }
      list.setClickedMenu(card);
      
      // item 처리
      card.addClassName("open");

      // popup 처리
      popup.remove();
      popup.setText(card.getContext);
      popup.draw(card.getElement);
    });
  });

  document.addEventListener("click", function(event){
    if(!list.self.contains(event.target)){
      list.getClickedMenu.removeClassName("open");
      list.setClickedMenu(null);
      popup.remove();
    }
    popup.remove();
    list.getClickedMenu
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