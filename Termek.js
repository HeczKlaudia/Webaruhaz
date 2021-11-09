class Termek {
  constructor(elem, nev, leiras, ar, kep) {
    // létrehozunk változókat az új elemhez
    this.elem = elem;
    this.nev = nev;
    this.leiras = leiras;
    this.kep = kep;
    this.ar = ar;

    // változókat az elem egyes grafikus elemeihez
    this.nev = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");
    this.ar = this.elem.children("span");

    // konkrét elemeknek értéket adunk
    this.setAdatok(this.adat);

    this.elem.children("button").on("click",()=>{
      this.KattintasTrigger();
    });
  }

  setAdatok(ertekek) {
    this.nev.html(ertekek.nev);
    this.kep.attr("src", ertekek.eleresiut);
    this.leiras.html(ertekek.leiras);
    this.ar.html(ertekek.ar);
  }

  KattintasTrigger() {
    let esemeny = new CustomEvent("termekvalasztas", { detail: this.adat });
    //   console.log("rákattintottál a termékre");
    window.dispatchEvent(esemeny);
  }
}