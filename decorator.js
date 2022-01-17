//Тут буду юзать decorator для магазина протеина. Типо с его помощью собирать кастомный протеин...

class Protein {
  constructor() {
    this.type = 'обычный';
    this.price = 1500;
  }

  getType() {
    return this.type;
  }

  getTaste() {
    return this.taste;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return 'Протеин';
  }
}

//Это я как бы создаю протеин конкретной фирмы
class SuperMegaProtein extends Protein {
  constructor() {
    super();
    this.price = 3000;
  }
}

// Тут создаём декораторы для новых объектов
class Taste {
  constructor(protein, taste) {
    this.protein = protein;
    this.taste = taste;
  }

  getPrice() {
    return this.protein.getPrice() + 4000;
  }

  getDescription() {
    return `${this.protein.getDescription()} со вкусом ${this.taste}`;
  }
};

class Type {
  constructor(protein, type) {
    this.protein = protein;
    this.type = type;
  }

  getPrice() {
    return this.protein.getPrice() + 2000;
  }

  getDescription() {
    return `${this.protein.getDescription()} ${this.type}`;
  }
}

//Создаём протеин конкретной фирмы с кастомными приколюхами только для меня
let SuperMegaProtein1 = new SuperMegaProtein();
SuperMegaProtein1 = new Type(SuperMegaProtein1, 'вялый');
SuperMegaProtein1 = new Taste(SuperMegaProtein1, 'Манго');

console.log(`${SuperMegaProtein1.getDescription()} за ${SuperMegaProtein1.getPrice()}р`);