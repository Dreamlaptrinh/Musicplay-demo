const numbers = [1, 2, 3, 4]

const result = numbers.reduce((total, number, index, array)=>{
    return total + number
},0)
console.log(result)
// reduce nhận 2 đối số, đối số 1 là callback, đối số 2 là initialvalue
// total là biến trích trữ
// number currentvalue
// 3 là currentindex
// 4 là mảng gốc tức là mảng numbers


Array.prototype.reduce2 = function(callback, result1){
    let i =0
    if (arguments.length <2){
        i= 1
        result1 = this[0]
    }
    for (; i < this.length; i++){
        result1 = callback(result1, this[i], i, this);
    }
    return result1
}
const result1 = numbers.reduce2((total, number, index, array)=>{
    console.log(index, total, number, array)
    return total + number
},0)
console.log(result1)