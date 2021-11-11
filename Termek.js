class Termek {
  constructor(elem, adat) {
    // létrehozunk változókat az új elemhez
    this.elem = elem;
    this.adat = adat;
    //  this.kosargomb = this.elem.children("button");
    // változókat az elem egyes grafikus elemeihez
    this.nev = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");
    this.ar = this.elem.children("span");

    // konkrét elemeknek értéket adunk
    this.setAdatok(this.adat);

    this.elem.children(".kosarba").on("click", () => {
      this.adat;
      // console.log(this.adat);
      this.KattintasTrigger();
    });
  }

  setAdatok(ertekek) {
    this.nev.html(ertekek.nev);
    this.kep.attr("src", ertekek.kep);
    this.leiras.html(ertekek.leiras);
    this.ar.html(ertekek.ar);
  }

  KattintasTrigger() {
    let esemeny = new CustomEvent("kosarba", { detail: this.adat });
    //   console.log("rákattintottál a termékre");
    window.dispatchEvent(esemeny);
  }
}
