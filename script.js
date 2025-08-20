const scriptURL ="https://script.google.com/macros/s/AKfycbx06Iw1ZWuDA8QVsCfz9tUTyPGDj1mmpKmVDuJw-1yEpX7hPa_Okmi6tVPEtsIaw1kr0g/exec";
const form = document.forms["formDokumen"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! your form is submitted successfully"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

function toDateInputValue(dateObject) {
  const local = new Date(dateObject);
  local.setMinutes(dateObject.getMinutes() - dateObject.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
}

document.getElementById("datePicker").value = toDateInputValue(new Date());