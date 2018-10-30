function balikString(arr){

    var balik = '';
    for(var i = arr.length-1; i>=0; i--){
        balik = balik + arr[i];
    }
    return balik;
}
console.log(balikString("hello world!"))