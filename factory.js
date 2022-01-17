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
  create(type, whoYou) {
    if (type === 'Анжумания') {
      return new exerciseAnjumaniya(whoYou);
    }
    if (type === 'Бегит') {
      return new exerciseBegit(whoYou);
    }
    if (type === 'Прес качат') {
      return new exercisePressKachat(whoYou);
    }
  }
}

const factory = new exerciseFactory();

const anjumania = factory.create('Анжумания', 'noooob');
const begit = factory.create('Бегит', 'flesh');
const pressKachat = factory.create('Прес качат', 'kubikrubik');

console.log(anjumania);
console.log(begit);
console.log(pressKachat);

