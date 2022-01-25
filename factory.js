//А тут у нас едрить-колотить factory фабрика которая производит упражнения...

class exerciseAnjumaniya {
  constructor(whoYou) {
    this.yourLevel = whoYou;
    this.type = 'Анжумания';
    this.value = 0;
  }
}

class exerciseBegit {
  constructor(whoYou) {
    this.yourLevel = whoYou;
    this.type = 'Бегит';
    this.value = 0;
  }
}

class exercisePressKachat {
  constructor(whoYou) {
    this.yourLevel = whoYou;
    this.type = 'Прес качат';
    this.value = 0;
  }
}

class exerciseFactory {
  constructor() {
    this.list = {
      'Анжумания': exerciseAnjumaniya,
      'Бегит': exerciseBegit,
      'Прес качат': exercisePressKachat,
    }
  }

  create(type, whoYou) {
    return new this.list[type](whoYou);
  }
}

const factory = new exerciseFactory();

const anjumania = factory.create('Анжумания', 'noooob');
const begit = factory.create('Бегит', 'flesh');
const pressKachat = factory.create('Прес качат', 'kubikrubik');

console.log(anjumania);
console.log(begit);
console.log(pressKachat);

