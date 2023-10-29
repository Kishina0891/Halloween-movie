function getData(form) {
    var formData = new FormData(form);
    return Object.fromEntries(formData);
  }

  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const data = getData(e.target);
    console.log(data)
  });