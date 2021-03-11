const items = document.getElementsByClassName("item");
const wrapper = document.getElementsByClassName("wrapper")[0];
function clickEventListener(event) {
  if (
    !wrapper.contains(event.target)
  ) {
    [...items].forEach(item => {
      item.classList.remove("open");
    });
  } else {
    [...items].forEach(item => {
      if(
          item === event.target
        ){
         item.classList.toggle("open");
      }else if(!item.contains(event.target)){
        console.log("remove")
        item.classList.remove("open")
      }
    })
  }
}

document.addEventListener("click", clickEventListener);
