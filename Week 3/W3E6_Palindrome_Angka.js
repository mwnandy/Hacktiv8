function angkaPalindrome(num) {
    for (var i = 0; i < num; i++){
        num++
        
        var RubahJadiString = String(num);
        var balik = '';

         for(var j = RubahJadiString.length-1; j >=0; j-- ){
             balik += RubahJadiString[j];
        //for (var j = 0; j < RubahJadiString.length; j++){
            //balik += RubahJadiString[j]
        }
            if (RubahJadiString === balik){
                 return num
            }
            
            
    }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(212)); // ?
  console.log(angkaPalindrome(1000)); // 1001


  /*
  // you can only write your code here!
    var balik = '';
    for (var i=num.length-1; i>=0; i--){
        balik = balik + num[i]
    }
    
    var Numbalik = String(balik)
    var angka = String(num);
    if (Numbalik === angka){
        return true;
    }
        else {
            return false;
        }
*/