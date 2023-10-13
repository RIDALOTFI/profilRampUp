
/*kata 1 */

function disemvowel(str) {
  
   
    const repStr = str.replace(/e|a|o|u|i|E|A|O|I|U/g, ""); 
  
  console.log(repStr);
  
    return repStr;
  }
  
/* kata 2 */
  function highAndLow(numbers){
  
    const arrayNum = numbers.split(" ");

  const low = Math.min(...arrayNum);
  const high = Math.max(...arrayNum);

  const Numfin =high+" "+low

  return Numfin
  // ...
}