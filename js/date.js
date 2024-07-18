const setDate = function () {
  const dateText = document.querySelector(".date");
  const date = new Date();

  dateText.insertAdjacentHTML(
    "beforeend",
    `<p class="text">${date.getFullYear()}</p>`
  );
};

export default setDate;
