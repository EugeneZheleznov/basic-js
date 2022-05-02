const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
    // Строка в массив по букве
    let arrStr = str.split('') 
    let arrSabaki = [] 
     
    arrSabaki = Array.from(arrStr.entries()).filter(i => i[1] == '@').map(i => i[0])
  
    // Получаем последний элемент с @
    let lastChar = arrSabaki[arrSabaki.length-1] 
  	
    // обрезаем строку от элемента @ и до конца
	  let result = str.slice(lastChar + 1) 
    return result
}

module.exports = {
  getEmailDomain
};
