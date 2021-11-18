$(function () {
  const termekek = [];
  function beolvasas() {
    $.ajax({
      url: "termekek.json",
      success: function (result) {
        // console.log(result);
        result.forEach((value) => {
          termekek.push(value);
          // console.log(termekek);
        });
        TermekValasztas();
        //  console.log(termekek);
      },
    });
  }
  beolvasas();

  function TermekValasztas() {
    // van egy sablonelemünk,s
    const szuloElem = $(".termekek");
    const sablonElem = $(".termek");

    termekek.forEach(function (elem) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const ujTermek = new AdminTermek(ujElem, elem);
    });

    sablonElem.remove();
  }

  $(window).on("torles", function (event) {
    console.log("törlés");
  });

  $(window).on("modositas", function (event) {
    console.log("módosítás");
  });

});
