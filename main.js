//Ну в общем-то здесь реализован так называемый singleton, он нужен чтобы main был единственным и не повторимым...

class Main {
  constructor() {
    if (typeof Main.instance === 'object') {
      return Main.instance;
    }
    this.count = 0;
    Main.instance = this;
    return this;
  }

  getMain() {
    return this.count;
  }

  increaseMain() {
    return this.count++;
  }
}

const Main1 = new Main();
const Main2 = new Main();

Main1.increaseMain();
Main1.increaseMain();
Main2.increaseMain();
Main2.increaseMain();

console.log(Main2.getMain());
console.log(Main1.getMain());