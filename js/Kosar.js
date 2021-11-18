class Kosar {
  constructor() {
    this.kosarTomb = [];
    this.kosarElem = $("#kosaram");
    // $("table").empty();
    $(".kosar").on("click", ".torles", (event)=> { //itt nem jó a function()(ilyenkor a this a konkrét gomb) csak a => (ilyenkor a this a teljes kosár osztály)
      let dataid = $(event.target).attr("data-id");
      console.log(dataid);
      this.kosarTomb.splice(dataid, 1);
      localStorage.setItem("termek", JSON.stringify(this.kosarTomb));
      this.Megjelenit();
    });
    // console.log("törölted");

    // localstorage adatainak betöltése
    let storageTomb = JSON.parse(localStorage.getItem("termek"));
    console.log(this.kosarTomb);
    if(storageTomb !== null) {
      storageTomb.forEach((elem) => {
        this.setElemKosarba(elem);
      });
    }
    
  }

  setElemKosarba(elem) {
    this.kosarTomb.push(elem);
    // itt mentünk a localstore-ba
    localStorage.setItem("termek", JSON.stringify(this.kosarTomb));
    this.Megjelenit();
  }

  Megjelenit() {
    $(".kosar").empty();
    $(".kosar").append("<table>");
    let elem =
      "<tr id='fejlec'><th>Név</th><th>Kép</th><th>Leírás</th><th>Ár</th><th>Törlés</th></tr>";

    this.kosarTomb.forEach((value, index) => {
      elem += "<tr id='" + index + "'>";
      for (let item in value) {
        elem += "<td>" + value[item] + "</td>";
      }
      elem +=
        "<td>" +
        "<button data-id='" + index + "' class='torles'>Törlés</button>" +
        "</td>";
      elem += "</tr>";
    });

    $(".kosar table").append(elem);

  }
}
