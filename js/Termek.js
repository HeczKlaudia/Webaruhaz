class Termek {
  constructor(elem, adat) {
    // létrehozunk változókat az új elemhez
    this.elem = elem;
    this.adat = adat;
    //  this.kosargomb = this.elem.children("button");
    // változókat az elem egyes grafikus elemeihez
    this.nev = this.elem.children(".termeknev");
    this.leiras = this.elem.children(".leiras");
    this.ar = this.elem.children(".ar");
    this.adat;
    // console.log(this.adat);
  }

  setAdatok(ertekek) {
    this.nev.html(ertekek.nev);
    this.kep.attr("src", ertekek.kep);
    this.leiras.html(ertekek.leiras);
    this.ar.html(ertekek.ar + " Ft");
  }
}

class AdminTermek extends Termek {
  constructor(elem, adat) {
    super(elem, adat);
    this.kep = this.elem.children(".kep").children("img");
    // konkrét elemeknek értéket adunk
    this.setAdatok(this.adat);
    this.elem.children(".torles").on("click", () => {
      this.TorolTrigger();
    });

    this.elem.children(".modositas").on("click", () => {
      this.ModositTrigger();
    });
 
  }

  TorolTrigger() {
    let esemeny = new CustomEvent("torles", { detail: this.adat });
    //   console.log("rákattintottál a termékre");
    window.dispatchEvent(esemeny);
  }

  ModositTrigger() {
    let esemeny = new CustomEvent("modositas", { detail: this.adat });
    //   console.log("rákattintottál a termékre");
    window.dispatchEvent(esemeny);
  }

}

class TermekVasarlas extends Termek {
  constructor(elem, adat) {
    super(elem, adat);
    this.kep = this.elem.children(".kep");
    // konkrét elemeknek értéket adunk
    this.setAdatok(this.adat);
    this.elem.children(".kosarba").on("click", () => {
      this.KattintasTrigger();
    });
  }

  KattintasTrigger() {
    let esemeny = new CustomEvent("kosarba", { detail: this.adat });
    //   console.log("rákattintottál a termékre");
    window.dispatchEvent(esemeny);
  }
}
