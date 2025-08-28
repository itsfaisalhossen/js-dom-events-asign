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

function setInnerText(value) {
  const setElement = getElement("heart-count");
  setElement.innerText = value;
}

function setInnerText2(value) {
  const setElement = getElement("copy-count");
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

let historyData = [];
const allCallBtn = document.getElementsByClassName("call-btn");
for (const callBtn of allCallBtn) {
  callBtn.addEventListener("click", function (e) {
    const title =
      callBtn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const subTitle =
      callBtn.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
    const number =
      callBtn.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

    const setCoinElement = getElement("coin-decrease");
    const coinAmount = getInnerText("coin-decrease");
    const totalCoin = coinAmount - 20;

    const data = {
      historyTile: title,
      historyNumber: number,
      date: new Date().toLocaleTimeString(),
    };

    if (coinAmount <= 0) {
      setCoinElement.innerText = 0;
      alert("You have no coin. You have to call minimum 20 coin");
      return;
    }
    alert(`📞 Calling ${subTitle} ${number}. . . .`);
    setCoinElement.innerText = totalCoin;

    historyData.push(data);
    const historeyContainer = getElement("history-container");
    historeyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
         <div
            class="flex items-center justify-between bg-gray-100 p-3 rounded-xl"
          >
            <div>
              <h4 class="font-semibold mb-1.5 w-full lg:w-[210px]">
                 ${data.historyTile}
              </h4>
              <p class="text-gray-500">${data.historyNumber}</p>
            </div>
            <p class="text-gray-500 text-sm">${data.date}</p>
          </div>
      `;
      historeyContainer.appendChild(div);
    }
  });
}

document.getElementById("clear-btn").addEventListener("click", function (e) {
  const historeyContainer = getElement("history-container");
  historeyContainer.innerText = "";
  historyData = [];
});

const allCopyBtn = document.getElementsByClassName("copy-btn");
for (const copyBtn of allCopyBtn) {
  copyBtn.addEventListener("click", function (e) {
    const number =
      copyBtn.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    const copyCount = getInnerText("copy-count");

    alert(`This Number is Coped ${number} . . . .`);
    navigator.clipboard.writeText(number).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );

    const totalCount = copyCount + 1;
    setInnerText2(totalCount);
  });
}
