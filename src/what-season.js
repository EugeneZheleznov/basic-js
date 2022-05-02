const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 
function getSeason(date) {
   
    if ( date === undefined ) {
        return 'Unable to determine the time of year!'
        //throw errorUnable;
    }
    // Проверяем если тип равен числу, или тип равен строке, или равен null, или равен массиву (а Data это объект а не массив), то возвращаем 'Invalid date!'
    if (typeof(date) === 'number' || typeof(date) === 'string' || date === null || Array.isArray(date) === true || typeof(date) === 'function') {
        return 'Invalid date!'
    }
      

      // Проверка: если мы всё же получили на вход объект, то надо проверить, что внутри него не строки, если строки вернём 'Invalid date!'
      // пройдёмся по объекту циклом for in 
    for (let item in date) {
        if (typeof(item) === 'string') {
            return 'Invalid date!' 
        }
    }
    // Проверка на правильность года, он должен быть не менее 4 символов
    // if (date.getFullYear() < 1000) {
    //     return 'Invalid date!'
    //   }
      
      // Тут просто по кол-ву месяцев, от 0 до 11, выводим времена года
      if (date.getMonth() <= 1 || date.getMonth() === 11) {
        return 'winter'
      }
      
      if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
        return 'spring'
      }
      
      if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
        return 'summer'
      }
      
      if (date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
        return 'autumn'
      }


  
}

module.exports = {
  getSeason
};
