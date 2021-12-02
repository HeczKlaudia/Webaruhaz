$(function () {
  const myAjax = new MyAjax();
  const termekek = [];
  let apiVegpont = "http://localhost:3000/termekek";

  myAjax.getAdat(apiVegpont, termekek, TermekValasztas);

  function TermekValasztas() {
    // van egy sablonelemünk
    const szuloElem = $(".termekek");
    const sablonElem = $(".termek");
    szuloElem.empty();
    szuloElem.show();
    termekek.forEach(function (elem, index) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const ujTermek = new AdminTermek(ujElem, elem);
    });
    sablonElem.hide();
  }

  /* Törlés */
  $(window).on("torles", (event) => {
    console.log(event.detail.id);
    myAjax.deleteAdat(apiVegpont, event.detail.id);
  });

  $(window).on("modositas", function (event) {
    console.log("módosítás");
  });
});
