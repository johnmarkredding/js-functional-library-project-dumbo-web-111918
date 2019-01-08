fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, cb) {
      if (typeof col === 'array') {
        col.forEach(cb);
      } else if (typeof col === 'object') {
        for (x in col) {
          cb(col[x]);
        }
      }
      return col;
    },

    map: function(col, cb) {
      let result = [];
      if (typeof col === 'array') {
        for (let i = 0; i < col.length; i++) {
          result[i] = cb(col[i], i, col);
        }
      } else if (typeof col === 'object') {
        colKeys = Object.keys(col);
        for (let i = 0; i < colKeys.length; i++) {
          result[i] = cb(col[colKeys[i]], colKeys[i], col);
        }
      }
      return result;
    },

    reduce: function(col, cb, acc = 0) {
      let result = acc;
      if (typeof col === 'array') {
        for (let i = 0; i < col.length; i++) {
          result = cb(result, col[i], col);
        }
      } else if (typeof col === 'object') {
        colKeys = Object.keys(col);
        for (let i = 0; i < colKeys.length; i++) {
          result = cb(result, col[colKeys[i]], col);
        }
      }
      return result;
    },

    find: function (col, cb) {
      let found = false;
      let result;
      for (let i = 0; !found && i < col.length; i++) {
        if (cb(col[i])) {
          result = col[i];
          found = true;
        }
      }
      return result;
    },

    filter: function (col, cb) {
      let result = [];
      for (let i = 0; i < col.length; i++) {
        if (cb(col[i])) {
          result.push(col[i]);
        }
      }
      return result;
    },

    size: function (col) {
      return Object.keys(col).length;
    },

    first: function (arr, n = 1) {
      let result;
      if (n <= 1) {
        result = arr[0];
      } else {
        result = [];
        for (let i = 0; i < n; i++) {
          result.push(arr[i]);
        }
      }
      return result;
    },
    last: function (arr, n = 1) {
      let result;
      if (n == 1) {
        result = arr[arr.length - 1];
      } else {
        result = [];
        for (let i = arr.length - n; i < arr.length; i++) {
          result.push(arr[i]);
        }
      }
      return result;
    },

    compact: function (arr) {
      let result;
      result = this.filter(arr, function (elem) {
        return !!elem;
      });
      return result;
    },

    sortBy: function (arr, cb) {
      let clone = arr.map(elm => elm);
      clone.sort((a, b) => (cb(a) - cb(b)));
      return clone;
    },

    flatten: function (arr, shallow = false) {
      let result = [];
      for (e of arr) {
        if (typeof e == "object") {
          result = result.concat((shallow ? e : this.flatten(e)));
        } else {
          result.push(e);
        }
      }
      return result;
    },

    uniq: function (arr, isSorted = false, cb = (elem) => elem) {
      let result = [];
      let resultSet = new Set();

      for (e of arr) {
        if (!resultSet.has(cb(e))) {
          result.push(e);
          resultSet.add(cb(e));
        }
      }
      return result;
    },
    keys: function (obj) {
      let result = [];
      for (key in obj) {
        result.push(key);
      }
      return result;
    },
    values: function (obj) {
      let result = [];
      for (key in obj) {
        result.push(obj[key]);
      }
      return result;
    },

    functions: function(obj) {
      let result = [];
      for (key in obj) {
        if (typeof obj[key] == 'function') {
          result.push(key);
        }
      }
      return result;
    },

  }
})()

fi.libraryMethod()
const nestedArr = [1, [2, 3], [[4, 5], 6, [7, [8, 9]]]];
const flatArr = fi.flatten(nestedArr);

console.log(flatArr);
