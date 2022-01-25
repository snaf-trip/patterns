//Проверка от дэбила, если вместо циферок буковы захочет ввести

let validator = {
  set: function (obj, prop, value) {
    if (prop === 'repetitions') {
      if (!Number.isInteger(value)) {
        console.log('Это не число дубина!');
      }
      if (value > 1000000) {
        console.log('Врать то не надо...');
      }
    }

    obj[prop] = value;

    return true;
  }
};

let exercise = new Proxy({}, validator);

exercise.repetitions = 100;
console.log(exercise.repetitions);
exercise.repetitions = 'сто пятьдесят миллионов тысяч';
exercise.repetitions = 300;
console.log(exercise.repetitions);