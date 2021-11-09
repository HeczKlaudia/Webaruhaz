$(function () {
  // beletesszük az adatokat egy tömbbe

  const termekek = [];

  $.ajax({
    url: "termekek.json",
    success: function (result) {
      //console.log(result);
      result.forEach((value) => {
        termekek.push(value);
      });
    },
  });

  let aktIndex = 0;

  // van egy sablonelemünk,
  const szuloElem = $("#galeria");
  const sablonElem = $(".termek");

  termekek.forEach(function (elem, index) {
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const ujKartya = new Termek(ujElem, elem, index);
  });

  const ujElem = sablonElem.clone().appendTo(fokepSzulo);
  const nagyKartya = new Termek(ujElem, termekek[aktIndex], aktIndex);

  sablonElem.remove();

  // kép kattintására kiírás
  $(window).on("kepvalasztas", function (event) {
    /* $("#fokep h3").html(event.detail.cim);
      $("#fokep img").attr("src", event.detail.eleresiut);
      $("#fokep p").html(event.detail.leiras); */
    nagyKartya.setAdatok(event.detail);
    aktIndex = event.detail.index;
    console.log(aktIndex);
  });

  // kép léptetése gombokkal
  $("#balNyil").on("click", () => {
    aktIndex--;
    if (aktIndex < 0) {
      aktIndex = kepadat.length - 1;
    }
    nagyKartya.setAdatok(kepadat[aktIndex]);
  });

  $("#jobbNyil").on("click", () => {
    aktIndex++;
    if (aktIndex > kepadat.length - 1) {
      aktIndex = 0;
    }
    nagyKartya.setAdatok(kepadat[aktIndex]);
  });
});