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
    const nameList = this.element.className.split("") || [];
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
    const nameList = this.element.className.split("") || [];
    const classNameIndex = nameList.indexOf(className);
    this.element.className = nameList.splice(classNameIndex,1).join(" ");
  }
}

export default Card;