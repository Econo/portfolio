"use strict";

const displayPicture = data => {
  let html = "";
  html += `<h3>${data[0].id}</h3>`;
  html += `<img src="${data[0].thumbnailUrl}" alt="thumbnail photo">`;
  $('#display').html(html);
};
$(document).ready(() => {
  document.getElementById("data").value = "3";
  $("#view_button").click(() => {
    const ide = document.getElementById("data").value;
    const domain = "https://jsonplaceholder.typicode.com/photos?id="+ide ;
    const url = domain;
    fetch(url)
      .then(response => response.json())
      .then(json => displayPicture(json))
      .catch(e => displayError(e));
    $("#display").focus();
  });
});