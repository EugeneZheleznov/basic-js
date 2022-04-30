const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  //throw new NotImplementedError('Not implemented');

  if (typeof(arr) == 'number' || arr === null || arr === false || arr === undefined || Array.isArray(arr) == false) {
    return false
  }
  
  // Пробегаемся методом filter по массиву, и фильтруем каждый элемент на принадлежность типа Строка, отсеиваем лишнее, получаем новый элемент в переменной newArr 
  let newArr = arr.filter(el => typeof(el) == 'string')
  console.log(newArr)
  
  let clearArr = [] // Пустой массив в который будем записывать результат
  
  // Пробегаемся методом for по массиву newArr, чтобы удалить пробелы в элементах массива если они есть, с помощью метода trim()
   
  for (let i = 0; i < newArr.length; i++) {
    let str = newArr[i].trim().toUpperCase()
    clearArr.push(str)
  } 
  
  // Далее сортируем массив по алфавиту методом sort()
    clearArr.sort()
    //console.log(clearArr)
  
  // Получаем элемент массива clearArr[0], строку в метод from() конструктора объекта Array. 
  // То есть мы разложим все символы строки на элементы массива.
  // Теперь берём у этого массива первый элемент и записываем его в переменную let res
  //console.log( Array.from(clearArr[0])[0])
  let res = ''
  for ( let i = 0; i < clearArr.length; i++ ) {
    let char = Array.from(clearArr[i])[0]
    res = res + char
  }
  return res  

}

module.exports = {
  createDreamTeam
};
