const doubleArr = (arr: number[]) => {
    console.log(arr)
    return (arr.length > 0 ? arr.map((number) => number*2) : "array is empty")
}
let arr = [2,3,5,7,2,8,3,5]
console.log(doubleArr(arr))