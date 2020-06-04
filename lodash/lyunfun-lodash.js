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
