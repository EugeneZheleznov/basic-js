const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  throw new NotImplementedError('Not implemented');

  let newArr = backyard.flat() 
  let result = 0
  
  newArr.forEach(function(item, newArr) {
      if (item == '^^') {
        result = result + 1 
      } 
  });

  return result;
}

module.exports = {
  countCats
};
 