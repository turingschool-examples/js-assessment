exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove: function(arr, item) {
    let uniqueNumbers = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        uniqueNumbers = [...uniqueNumbers, arr[i]];
      }
    }
    return uniqueNumbers;
  },

  removeWithoutCopy: function(arr, item) {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--
        arrLength--
      }
    }
    return arr;
  },

  append: function(arr, item) {
    return [ ...arr, item ];
  },

  truncate: function(arr) {
    arr.length = arr.length - 1;
    return arr;
  },

  prepend: function(arr, item) {
    return [ item, ...arr ];
  },

  curtail: function(arr) {
    let modifiedNumbers = [];

    for (let i = 1; i < arr.length; i++) {
      modifiedNumbers = [...modifiedNumbers, arr[i]];
    }

    return modifiedNumbers;
  },

  concat: function(arr1, arr2) {
    return [ ...arr1, ...arr2 ];
  },

  insert: function(arr, item, index) {
    arr.length = arr.length + 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (i === index) {
        arr[i] = item;
        break;
      }
      arr[i] = arr[i - 1];
    }
    return arr;
  },

  count: function(arr, item) {
    let occurrences = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) 
      occurrences++
    }
    return occurrences;
  },

  duplicates: function(arr) {
    const uniqueNums = {};
    const duplicates = {};

    for (let i = 0; i < arr.length; i++) {
      if (uniqueNums[arr[i]]) {
        duplicates[arr[i]] = true;
      }
      uniqueNums[arr[i]] = true;
    }
    
    const duplicateNumbers = Object.keys(duplicates);

    for (let i = 0; i < duplicateNumbers.length; i++) {
      duplicateNumbers[i] = parseInt(duplicateNumbers[i])
    }
    return duplicateNumbers;
  },

  square: function(arr) {
    let squaredArr = []
    for (let i = 0; i < arr.length; i++) {
      squaredArr = [...squaredArr, (arr[i] * arr[i])]
    }
    return squaredArr
  },

  findAllOccurrences: function(arr, target) {
    let foundIndices = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        foundIndices = [...foundIndices, i]
      }
    }
    return foundIndices
  }
};
