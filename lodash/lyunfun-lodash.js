var lyunfun = {
  chunk: function(array, size) {
    size = parseInt(size)
    let length = array == null ? 0 : array.length
    if (!length || size < 1) {
      return []
    }
    const result = new Array(Math.ceil(length / size))
    let index = 0
    let resindex = 0
    while (index < length) {
      result[resindex++] = array.slice(index, index += size)
    }
    return result
  },
  compact: function(array) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return [];
    }
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },

  difference: function(array, ...val) {
    if (array.length <= 0 || !Array.isArray(array) || !array) {
      return []
    }
    let map = new Map();
    val = [].concat(...val)
    val.forEach(n => map[n] = true)
    return array.filter(n => !(n in map))
  },

  drop: function(array, n) {
    if (array.length <= 0 || !Array.isArray(array) || !array) {
      return []
    }
    n === undefined ? n = 1 : n = parseInt(n)
    return array.slice(n)
  },
  dropRight: function(array, n = 1) {
    return array.length > n ? array.slice(0, array.length - n) : [];
  },
  dropRightWhile: function() {

  },
  dropWhile: function() {

  },
  fill: function(array, value, start = 0, end = array.length) {
    for (start; start < end; start++) {
      array[start] = value
    }
    return array
  }
  ,
  flatten: function(array) {
    return array.flat(1)
  },
  flattenDeep: function flattenDeep(array) {
    return [].concat(...array.map(n => Array.isArray(n) ? flattenDeep(n) : n))
  },
  flattenDepth: function(array, depth = 1) {
    return array.flat(depth)
  },
  head: function(array) {
    let arr = array
    return arr.shift()
  },
  indexOf: function(array, value, fromIndex = 0) {
    let index = fromIndex >= 0 ? fromIndex : fromIndex + array.length
    for (let i = index; i < array.length; i++) {
      if (array[i] == value || array[i] != array[i] && value != value) return i
    }
    return -1
  },
  initial: function(array) {
    return array.slice(0, array.length - 1)
  },
  intersection: function(...array) {
    // 二维数组 对象 reduce
    if (array.length == 1) return array
    let map = new Map()
    let result = []
    array[0].forEach(n => map.set(n, false))
    for (let i = 1; i < array.length; i++) {
      array[i].forEach(n => map.has(n) && map.set(n, true))
    }
    map.forEach((value, key) => value && result.push(key))
    return result
  },
  join: function(array, separator = ',') {
    return array.join(separator)
  },
  last: function(array) {
    let arr = array
    return arr.pop()
  },
  lastIndexOf: function(array, value, fromIndex = array.length - 1) {
    let arr = array.slice(0, fromIndex + 1)
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] == value || arr[i] != arr[i] && value != value)
        return i
    }
    return -1
  },
  isNull: function(val) {
    if (val === null) {
      return true
    } else {
      return false
    }
  },
  isNaN: function(val) {
    if (val !== val) {
      return true
    } else {
      return false
    }
  },
}
