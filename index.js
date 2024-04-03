// Code your solutions in this file
 function countDown(){
    let i = 0;
    while(i<11){
        console.log (i++);
    }
    
 }
 writeCards (["Guadalupe", "Ollie", "Aki"],'surprise');
 function writeCards(names) {
  for (let i = 3; i < names.length;i++) {
    console.log(`Thank you,${names[i]}, for the wonderful surprise gift!`);
  }
  return writeCards;
}
