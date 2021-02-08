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
    const nameList = this.element.className.split("") || [];
    const classNameIndex = nameList.indexOf(className); 
    if( classNameIndex === -1){
      this.getElement.className += " " + className;
    }
  }

  removeClassName(className){
    const nameList = this.getElement.className.split(" ") || [];
    const classNameIndex = nameList.indexOf(className);
    if( classNameIndex !== -1){
      this.element.className = nameList.splice(classNameIndex,1).join(" ");
    }
  }
}

export default Card;