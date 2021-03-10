const items = document.getElementsByClassName("item");
const wrapper = document.getElementByClassName("wrapper");

function clickEventListener(event) {
  if (
    !wrapper.contains(event.target) &&
    event.target.classList.includes("context")
  ) {
    items.forEach(item => {
      item.classList.remove("open");
    });
  } else {
    event.target.classList.add("open");
  }
}

window.addEventListener("click", clickEventListener);
