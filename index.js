import "./style.css";
import renderList from "./listRenderer";

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const loadMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};

const onScroll = (e) => {
  // do something (hint: e.target.scrollingElement)
  if(e.target.scrollingElement.scrollTop + e.target.scrollingElement.clientHeight >=  e.target.scrollingElement.scrollHeight - 20){
    ++page;
    loadMore();
  }
};

document.addEventListener("scroll", onScroll);
loadMore();
