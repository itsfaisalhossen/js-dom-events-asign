// function to get element
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// function to get innerText
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

// function to set innerText
function setInnerText(value) {
  const setElement = getElement("heart-count");
  setElement.innerText = value;
}

const allHeartBtn = document.getElementsByClassName("heart-btn");
for (const heartBtn of allHeartBtn) {
  heartBtn.addEventListener("click", function (e) {
    const heartCount = getInnerText("heart-count");
    const totalCount = heartCount + 1;
    setInnerText(totalCount);
  });
}
