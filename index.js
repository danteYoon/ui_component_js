const items = document.getElementsByClassName("item");
const wrapper = document.getElementsByClassName("wrapper")[0];
function clickEventListener(event) {
  if (
    !wrapper.contains(event.target) &&
    event.target.classList.contains("context")
  ) {
    items.forEach(item => {
      item.classList.remove("open");
    });
  } else {
    event.target.classList.add("open");
  }
}

document.addEventListener("click", clickEventListener);
