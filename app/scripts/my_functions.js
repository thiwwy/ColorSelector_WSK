//Variables
var overlay = $(".mdl-layout__obfuscator"),
        fab = $(".fab"),
     cancel = $("#cancel"),

     mypalette_btn = $("#mypalette-btn"),

     submit = $("#submit");

//fab click
fab.on('click', openFAB);
overlay.on('click', closeFAB);
cancel.on('click', closeFAB);

function openFAB(event) {
  if (event) event.preventDefault();
  fab.addClass('active-mypalette');
  overlay.addClass('is-visible');

  mypalette_btn.css( "display", "none" );

}

function closeFAB(event) {
  if (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  fab.removeClass('active-mypalette');
  overlay.removeClass('is-visible');

  mypalette_btn.css( "display", "block" );

}
