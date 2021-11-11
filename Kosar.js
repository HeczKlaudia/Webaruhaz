class Kosar {
  constructor() {
    this.kosarTomb = [];
    this.kosarElem = $("#kosaram");
    // $("table").empty();
    $(".kosar").on("click", ".torles", function () {
      let dataid = $(this).attr("data-id");
      console.log(dataid);
      this.kosarTomb.splice(dataid, 1);
      this.Megjelenit();
    });
    // console.log("törölted");
  }

  setElemKosarba(elem) {
    this.kosarTomb.push(elem);
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
        "<button onclick='Torles()' data-id='0' class='torles'>Törlés</button>" +
        "</td>";
      elem += "</tr>";
    });

    $(".kosar table").append(elem);
  }
}
