const details = document.querySelectorAll("details");

document.addEventListener("click", (e) => {
  console.log("e.target.nodeName: ", e.target.nodeName);
  if(!["SUMMARY", "DETAILS"].includes(e.target.nodeName)){
    details.forEach(detail => {
      detail.removeAttribute("open");
    })
    return;
  }
  else {
    details.forEach((detail) => {
      if(detail !== e.target){
        detail.removeAttribute("open");
      }
    })
  }
});