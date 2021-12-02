$(function () {
  const myAjax = new MyAjax();
  const termekek = [];
  //const szuloElem = $(".termekek");
  let apiVegpont = "http://localhost:3000/termekek";

  /* Keresőmezőbe írva */
  $("#kereses").on("keyup", () => {
    let apiVegpont = "http://localhost:3000/termekek";
    apiVegpont += "?q=" + $("#kereses").val();
    console.log(apiVegpont);
    myAjax.getAdat(apiVegpont, termekek, TermekValasztas);
  });

  /* Rendezés */
  $(document).ready(function () {
    $("#kategoria").on("change", function () {
      let apiVegpont = "http://localhost:3000/termekek";
      switch ($("#kategoria").val()) {
        case "nevszerinti":
          console.log("név szerinti");
          let nev = "?_sort=nev&_order=asc";
          apiVegpont += nev;
          // ajax hívás
          myAjax.getAdat(apiVegpont, termekek, TermekValasztas);
          console.log(apiVegpont);
          break;
        case "novekvo":
          console.log("növekvő");
          let novekvo = "?_sort=ar&_order=asc";
          apiVegpont += novekvo;
          // ajax hívás
          myAjax.getAdat(apiVegpont, termekek, TermekValasztas);
          console.log(apiVegpont);
          break;
        case "csokkeno":
          console.log("csökkenő");
          let csokkeno = "?_sort=ar&_order=desc";
          apiVegpont += csokkeno;
          // ajax hívás
          myAjax.getAdat(apiVegpont, termekek, TermekValasztas);
          console.log(apiVegpont);
          break;
        default:
          console.log("alapértelmezett");
      }
    });
  });

  myAjax.getAdat(apiVegpont, termekek, TermekValasztas);

  function TermekValasztas() {
    // van egy sablonelemünk
    const szuloElem = $(".termekek");
    const sablonElem = $("aside .termek");
    szuloElem.empty();
    szuloElem.show();
    termekek.forEach(function (elem) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const ujTermek = new TermekVasarlas(ujElem, elem);
    });

    //sablonElem.remove();
    sablonElem.hide();
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
