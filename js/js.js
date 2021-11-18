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
      const ujTermek = new TermekVasarlas(ujElem, elem);
    });

    sablonElem.remove();
  }

  const kisKosar = new Kosar();
  $(window).on("kosarba", function (event) {
    /* $("#fokep h3").html(event.detail.cim);
      $("#fokep img").attr("src", event.detail.eleresiut);
      $("#fokep p").html(event.detail.leiras); */
    kisKosar.setElemKosarba(event.detail);
    //console.log(event.detail);
  });
});
