class Weapon {
    constructor(
        weaponObj = {
            name: "undefined",
            attack: 0,
            durability: 0,
            range: 0,
        }
    ) {
        this.name = weaponObj.name;
        this.attack = weaponObj.attack;
        this.durability = weaponObj.durability;
        this.range = weaponObj.range;
        this.initialDurability = weaponObj.durability;
    }

    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability < 0) {
            this.durability = 0
        }
    }
    getDamage() {
        if (this.durability >= this.startDurability * 0.3) {
            return this.attack;
        } else if (this.durability === 0) {
            return 0;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        return this.durability === 0;
    }
}

class Hand extends Weapon {
    constructor() {
        super();
        this.name = "Рука",
            this.attack = 1,
            this.durability = Infinity,
            this.range = 1,
            this.initialDurability = this.durability;
    }
}

class Bow extends Weapon {
    constructor() {
        super();
        this.name = "Лук",
            this.attack = 10,
            this.durability = 200,
            this.range = 3,
            this.initialDurability = this.durability;
    }
}

class Sword extends Weapon {
    constructor() {
        super();
        this.name = "Меч",
            this.attack = 25,
            this.durability = 500,
            this.range = 1,
            this.initialDurability = this.durability;
    }
}

class Knife extends Weapon {
    constructor() {
        super();
        this.name = "Нож",
            this.attack = 5,
            this.durability = 300,
            this.range = 1,
            this.initialDurability = this.durability;
    }
}

class Staff extends Weapon {
    constructor() {
        super();
        this.name = "Посох",
            this.attack = 8,
            this.durability = 300,
            this.range = 2,
            this.initialDurability = this.durability;
    }
}

class Longbow extends Bow {
    constructor() {
        super();
        this.name = "Длинный лук",
            this.attack = 15,
            this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = "Секира",
            this.attack = 27,
            this.durability = 800;
    }
}

class ThunderStaff extends Staff {
    constructor() {
        super();
        this.name = "Посох бури",
            this.attack = 10,
            this.range = 3
    }
}

const hand = new Hand();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();
const longbow = new Longbow();
const axe = new Axe();
const thunderStaff = new ThunderStaff();