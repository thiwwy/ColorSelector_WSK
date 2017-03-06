//Variables
var overlay = $(".mdl-layout__obfuscator"),
        fab = $(".fab"),
     cancel = $("#cancel"),
     submit = $("#submit");

//fab click
fab.on('click', openFAB);
overlay.on('click', closeFAB);
cancel.on('click', closeFAB);

function openFAB(event) {
  if (event) event.preventDefault();
  fab.addClass('active-mypalette');
  overlay.addClass('is-visible');

}

function closeFAB(event) {
  if (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  console.log("Hi!!");

  fab.removeClass('active-mypalette');
  overlay.removeClass('is-visible');

}
