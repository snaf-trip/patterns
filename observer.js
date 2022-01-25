//Ну тут идея простых новостей, точнее автомотичской рассылки новостей...

class News {
  constructor() {
    this.news = '';
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach(subs => subs.inform(this));
  }

  register(observer) {
    this.actions.push(observer);
    console.log('+1 подписчик ' + observer.name);
  }

  unregister(observer) {
    this.actions = this.actions.filter((obs) => obs !== observer);
    console.log('-1 подписчик ' + observer.name);
  }
};

//Подписчики на новости
class Subscriber {
  constructor(name) {
    this.name = name;
  }

  inform(message) {
    console.log(`${this.name} получил новость ${message.news}`);
  }
}


const user1 = new Subscriber('дудли паркур киллер дарк бравлстарс ассасин сталкер снайпер 2003 бизе');
const user2 = new Subscriber('DemonNaMasse')

//ну а тут уже работа этой жимолости

const autoNews = new News();

console.log('________________________');
autoNews.register(user1);
console.log('________________________');
autoNews.setNews('Скидка на синтол 30% Успевай кольнуться!!!!!!!!!')
console.log('________________________');

autoNews.register(user2);
console.log('________________________');
autoNews.setNews('Акушер сбежал от роженицы когда увидел что из неё лезет...')
console.log('________________________');

autoNews.unregister(user2)
console.log('________________________');
autoNews.setNews('Встречайте новые вкусы энергетических баточников!')