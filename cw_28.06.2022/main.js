/*Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.

now complete

*/

function sorted(arr){
    let newArr = arr.map(x=>x).sort((a,b)=>a-b)//accending
    let newArrTwo = arr.map(x=>x).sort((a,b)=>b-a)//decending

    // console.log(`arr : ${arr}`)
    // console.log(`newArr : ${newArr}`)
    // console.log(`newArrTwo : ${newArrTwo}`)

    if(arr == newArr){
        return 'yes,accending'
    }else if(arr == newArrTwo){
        return 'yes,decending'
    }else{
        return 'No'
    }
}


sorted([1,2,3,4])
