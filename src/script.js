function increasing_array(arr) {
    let len =arr.length 
    let sum=0;
    for(let i=0;i<len;i++){
        if(arr[i+1]<arr[i]){
            sum +=arr[i]-arr[i+1]
            arr[i+1]=arr[i]
        }
    }
    return sum;

}

let num = '200'
function Decimal_places(num) {
    for(ele of num){
        if(ele==="."){
    let temp=num.split(".")
    return temp[1].length
        }
    }
    return 0

}


function mergeAndOrder(array1, array2) {
    let newArray=[...array1,...array2];
    let len=newArray.length
    for(let x=0;x<len;x++){
    for(let j=x+1;j<len;j++){
        if(newArray[j]<newArray[x]){
            let temp=newArray[x]
            newArray[x]=newArray[j]
            newArray[j]=temp
        }
    }
    }
    return newArray
}

function replaceThe(txt) {
    let res=txt.replace("the a","an a")
    res =res.replace("the o","an o")
    res =res.replace("the ","a ")
    return res
}



