function arrayToString(arr){
    var stringArr = '';
    for(var i=0 ; i<arr.length-1; i++){
        stringArr+=arr[i]+"||"
    }
    stringArr+=arr[arr.length-1];
    return stringArr;
}
module.exports = arrayToString;