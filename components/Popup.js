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