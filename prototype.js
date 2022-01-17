//Это prototype он нужен для создания новых видов упражнений на основе старых

class exerciseInfo {
  constructor(type, level, calorieLoss, timeToComplete, bodyPart) {
    this.type = type;
    this.level = level;
    this.calorieLoss = calorieLoss;
    this.timeToComplete = timeToComplete;
    this.bodyPart = bodyPart;
  }

  produce() {
    return new exerciseInfo(this.type, this.level, this.calorieLoss, this.timeToComplete, this.bodyPart)
  }
}

//ну получается есть обычные отжимания:
const exerciseMain = new exerciseInfo('Обычные анжумания', 'medium', 100, 10, 'all');

//А есть обновленные:
const updatedExercise1 = exerciseMain.produce();

updatedExercise1.type = 'Анжумания на коленях';
updatedExercise1.level = 'low';
updatedExercise1.calorieLoss = '60';

console.log(exerciseMain);
console.log(updatedExercise1);
