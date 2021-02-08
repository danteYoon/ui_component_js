function something(){
  const listElement = document.getElementsByClassName("wrapper");
  const cardElements = doucment.getElementsByClassName("item");

  const list = new List();
  const popup = new Popup();

  cardElements.foreach((item) => {
    const card = new Card(item);
    list.addList(card);
    item.addEventListener("click", function(event){
      // list 처리
      if(list.getClickedMenu){
        list.getClickedMenu.removeClassName("open");
      }
      list.setClickedMenu(card);
      
      // item 처리
      item.getElement.addClassName("open");

      // popup 처리
      popup.remove();
      popup.setText(card.getContext);
      popup.draw(card.getElement);
    });
  });
}

export default something;