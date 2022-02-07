function sumItems(array) {
  let sum = 0 
  array.forEach(element => { 
    if (Array.isArray(element)) {
    sum += sumItems(element)
    }
    else { sum += element}
  });
  return sum
}

console.log(sumItems([1, 2, 3, 4, 5]))
console.log(sumItems([[1, 2, [[3], 4]], 5, []]))
console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]))
module.exports = sumItems;