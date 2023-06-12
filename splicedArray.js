let arr = [1,2,3,4,5,6,7,8,9]
//output = [[1,2,3],[4,5,6],[7,8,9]]


const arrayToReturn=[];
    var arr1 =[];
var bool = false;
for(let i =1; i<=arr.length; i++ ){ 
    if(bool){
        arrayToReturn.push(arr1)
        arr1 = []
        bool =false;
    }
    arr1.push(arr[i-1]);
    if(i%3===0)bool = true;
    if(i==arr.length)     
      arrayToReturn.push(arr1)

}
    
    console.log(arrayToReturn)