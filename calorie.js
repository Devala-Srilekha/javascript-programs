function inputCaloriesByDay(day) {
}
function inputCaloriesByDay(day) {
  if (day === 'Monday') {
    return 3500;
  } else if (day === 'Tuesday') {
    return 1500;
  } else if (day === 'Wednesday') {
      return 1800;
    } else if (day === 'Thursday') {
      return 2300;
    } else if (day === 'Friday') {
      return 2400;
    } else if (day === 'Saturday') {
      return 1500;
    } else if (day === 'Sunday') {
      return 1500;
    } else {
      return 'Please choose valid day';
    }
}
function inputCaloriesByDay(day) {
  	switch(day) {
    case 'Monday':
        return 3500;
        break;
    case 'Tuesday':
        return 1500;
        break;
        case 'Wednesday':
       return 1800;
        break;
        case 'Thursday':
        return 2300;
        break;
        case 'Friday':
       return 2400;
        break;
        case 'Saturday':
        return 1500;
        break;
        case 'Sunday':
        return 1500;
        break;
    default:
        return 'Please choose a valid day';
  }
}
console.log(inputCaloriesByDay('Monday'));
console.log(inputCaloriesByDay('Tuesday'));
function getTotalCalories() {
}
function getTotalCalories() {
  return inputCaloriesByDay('Monday') +
  inputCaloriesByDay('Tuesday') +
  inputCaloriesByDay('Wednesday') +
  inputCaloriesByDay('Thursday') +
  inputCaloriesByDay('Friday') +
  inputCaloriesByDay('Saturday') + 
  inputCaloriesByDay('Sunday');
}
function getIdealCalories() {
}
function getIdealCalories() {
  var idealDailyCalories = 2000;
  return idealDailyCalories * 7;
}
function calculateHealthPlan() {
  var actualCalories = getTotalCalories();
  var idealCalories = getIdealCalories();
}
function calculateHealthPlan() {
  var actualCalories = getTotalCalories();
  var idealCalories = getIdealCalories();
  if (actualCalories === idealCalories) {
    return 'You ate just the right amount!';
  }
  if (actualCalories > idealCalories) {
    return 'Time to head to the gym!';
  } else {
    return 'Time for seconds!';
  }
}
console.log(calculateHealthPlan());

