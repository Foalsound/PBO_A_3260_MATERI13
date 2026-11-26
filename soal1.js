class Kendaraan {
  constructor(nama) {
    this.nama = nama;
  }
  info() {
    console.log(`Kendaraan: ${this.nama}`);
  }
}

class KendaraanBensin extends Kendaraan {
  isiBensin(liter) {
    console.log(`${this.nama} mengisi bensin ${liter} liter.`);
  }
}

class KendaraanListrik extends Kendaraan {
  isiDaya(kwh) {
    console.log(`${this.nama} mengisi daya ${kwh} kWh.`);
  }
}

class MobilBensin extends KendaraanBensin {}
class MobilListrik extends KendaraanListrik {}
class MotorBensin extends KendaraanBensin {}

function isiSemuaBensin(daftar) {
  daftar.forEach((k) => k.isiBensin(20));
}

function isiSemuaDaya(daftar) {
  daftar.forEach((k) => k.isiDaya(40));
}

const Avanza_3260 = new MobilBensin("Avanza_3260");
const Ioniq_3260 = new MobilListrik("Ioniq_3260");
const Beat_3260 = new MotorBensin("Beat_3260");

Avanza_3260.info();
Ioniq_3260.info();
Beat_3260.info();

isiSemuaBensin([Avanza_3260, Beat_3260]);
isiSemuaDaya([Ioniq_3260]);