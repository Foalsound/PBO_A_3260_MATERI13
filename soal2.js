const pembersih = {
    bersihkan() {
        console.log(this.nama + " membersihkan ruangan.");
    }
};

const pengantar = {
    antarPaket() {
        console.log(this.nama + " mengantar paket.");
    }
};

const penjaga = {
    patroli() {
        console.log(this.nama + " berpatroli di area.");
    }
};

function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan);
}

class RobotRumah {
    constructor(nama) {
        this.nama = nama;
    }
}

class RobotKurir {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(RobotRumah, pembersih, penjaga);
applyCapabilities(RobotKurir, pengantar);

const RobotRumah_3260 = new RobotRumah("RobotRumah_3260");
const RobotKurir_3260 = new RobotKurir("RobotKurir_3260");

RobotRumah_3260.bersihkan();
RobotRumah_3260.patroli();
RobotKurir_3260.antarPaket();

console.log("RobotKurir_3260 bisa membersihkan? " + (typeof RobotKurir_3260.bersihkan === "function"));
console.log("RobotRumah_3260 bisa mengantar paket? " + (typeof RobotRumah_3260.antarPaket === "function"));