const secondLargest = (a)=>{
    let max = 0
    let second = 0 
    a.sort()
    for (let i = 0; i < a.length; i++) {
        if(a[i]>max){
            second = max
            max = a[i]
        }
    }
    return second
}
console.log(`second of this array is ${secondLargest([1,2,3,2,3,4,5,5,6,6,6])}`)