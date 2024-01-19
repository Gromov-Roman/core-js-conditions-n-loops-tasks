/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    return a > c ? a : c;
  }

  return b > c ? b : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
//    1, 2, 3, 4, 5, 6, 7, 8
// 1 [0, 0, 0, 0, Y, -, 0, 0]
// 2 [-, 0, 0, 0, -, Y, 0, 0]
// 3 [0, -, 0, -, 0, 0, Y, 0]
// 4 [0, 0, A, 0, 0, 0, 0, X]
// 5 [0, -, 0, -, 0, 0, Y, 0]
// 6 [-, 0, 0, 0, -, Y, 0, 0]
// 7 [0, 0, 0, 0, Y, -, 0, 0]
// 8 [0, 0, 0, Y, 0, 0, -, 0]
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }

  const x = queen.x - king.x > 0 ? queen.x - king.x : king.x - queen.x;
  const xAbs = x > 0 ? x : -x;
  const y = queen.y - king.y > 0 ? queen.y - king.y : king.y - queen.y;
  const yAbs = y > 0 ? y : -y;

  return xAbs === yAbs;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (!a || !b || !c) {
    return false;
  }

  const ab = a === b && a + b > c;
  const bc = b === c && b + c > a;
  const ac = a === c && a + c > b;

  return ab || bc || ac;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumerals = [
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let current = num;
  let result = '';

  for (let i = 0; i < romanNumerals.length; i += 1) {
    const numeral = romanNumerals[i];

    while (current >= numeral.value) {
      result += numeral.numeral;
      current -= numeral.value;
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    if (result) {
      result += ' ';
    }

    switch (numberStr[i]) {
      case '-':
        result += 'minus';
        break;
      case '.':
        result += 'point';
        break;
      case '; break;':
        result += 'point';
        break;
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      default:
        result += 'point';
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }

  return str === reversed;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === `${digit}`) {
      return true;
    }
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) {
    return -1;
  }

  let left = 0;
  for (let i = 0; i < arr.length - 1; i += 1) {
    let right = 0;

    for (let j = arr.length - 1; j > i; j -= 1) {
      right += arr[j];
    }

    if (left === right) {
      return i;
    }

    left += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  if (size === 0) {
    return [];
  }

  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  let current = 0;

  let rowStart = 0;
  let rowEnd = size - 1;

  let colStart = 0;
  let colEnd = size - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i += 1) {
      current += 1;
      matrix[rowStart][i] = current;
    }
    rowStart += 1;

    for (let i = rowStart; i <= rowEnd; i += 1) {
      current += 1;
      matrix[i][colEnd] = current;
    }
    colEnd -= 1;

    for (let i = colEnd; i >= colStart; i -= 1) {
      current += 1;
      matrix[rowEnd][i] = current;
    }
    rowEnd -= 1;

    for (let i = rowEnd; i >= rowStart; i -= 1) {
      current += 1;
      matrix[i][colStart] = current;
    }
    colStart += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 ]
 */
function rotateMatrix(matrix) {
  const size = matrix.length;
  const result = new Array(size);

  for (let i = 0; i < size; i += 1) {
    result[i] = new Array(size);
  }

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      result[col][size - row - 1] = matrix[row][col];
    }
  }

  const matrixClone = matrix;
  for (let i = 0; i < size; i += 1) {
    matrixClone[i] = result[i];
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

const swap = (arr, from, to) => {
  const cloneArray = arr;
  const temp = cloneArray[from];

  cloneArray[from] = cloneArray[to];
  cloneArray[to] = temp;
};

const qsInsertionSort = (arr, left, right) => {
  const cloneArray = arr;

  for (let i = left + 1; i < right + 1; i += 1) {
    let sorted = i - 1;

    while (sorted >= 0 && cloneArray[sorted] > cloneArray[sorted + 1]) {
      swap(cloneArray, sorted, sorted + 1);
      sorted -= 1;
    }
  }
};

const qsPartition = (arr, left, right) => {
  const cloneArr = arr;
  let cloneLeft = left;
  let cloneRight = right;

  const first = cloneLeft;
  const middle = cloneLeft + Math.floor((cloneRight - cloneLeft) / 2);
  const last = cloneRight;

  if (cloneArr[first] > cloneArr[last]) swap(cloneArr, first, last);
  if (cloneArr[middle] > cloneArr[first]) swap(cloneArr, first, middle);
  else if (cloneArr[middle] > cloneArr[last]) swap(cloneArr, middle, last);

  const pivot = cloneArr[middle];

  while (cloneLeft <= cloneRight) {
    while (cloneArr[cloneLeft] < pivot) {
      cloneLeft += 1;
    }
    while (cloneArr[cloneRight] > pivot) {
      cloneRight -= 1;
    }

    if (cloneLeft <= cloneRight) {
      swap(cloneArr, cloneLeft, cloneRight);

      cloneLeft += 1;
      cloneRight -= 1;
    }
  }

  return cloneLeft;
};

function quickSort(arr, start = 0, end = arr.length - 1) {
  const cloneArr = arr;
  let cloneStart = start;
  let cloneEnd = end;

  while (true) {
    if (cloneStart >= cloneEnd) return;

    if (cloneArr.slice(start, end + 1).length <= 10) {
      qsInsertionSort(cloneArr, cloneStart, cloneEnd);
      return;
    }

    const rightStart = qsPartition(cloneArr, cloneStart, cloneEnd);

    if (rightStart - 1 - cloneStart < cloneEnd - rightStart) {
      quickSort(cloneArr, cloneStart, rightStart - 1);
      cloneStart = rightStart;
    } else {
      quickSort(cloneArr, rightStart, cloneEnd);
      cloneEnd = rightStart - 1;
    }
  }
}

function sortByAsc(arr) {
  quickSort(arr);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  let start = '';
  let end = '';
  let count = iterations;
  let loop = 0;

  for (let iteration = 0; iteration < count; iteration += 1) {
    start = '';
    end = '';
    for (let i = 0; i < result.length; i += 1) {
      if (i % 2 === 0) {
        start += result[i];
      } else {
        end += result[i];
      }
    }

    result = start + end;
    loop += 1;

    if (result === str && count - loop * 2 > 0) {
      count = (count % loop) + 1;
      iteration = 0;
    }
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = `${number}`;
  let start = '';
  let end = '';
  let middle = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (!middle) {
      if (+str[i] < +str[i + 1]) {
        middle = str[i];
      } else {
        end = str[i] + end;
      }
    } else {
      start = str[i] + start;
    }
  }

  if (!middle) {
    return number;
  }

  let index = null;
  const endArr = [];

  for (let i = 0; i < end.length; i += 1) {
    const item = +end[i];
    endArr[i] = item;

    if (item > +middle && (item < +end[index] || !index)) {
      index = i;
    }
  }

  start += end[index];
  end[index] = middle;
  endArr[index] = +middle;

  sortByAsc(endArr);

  return +(start + endArr.join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
