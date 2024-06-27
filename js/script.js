// creo un ciclo che mi stampi numeri da 1 a 100
for (let i = 0; i <= 100; i++){
    

    // se è multiplo sia di 3 che di 5 assegno la stringa fizzbuzz
        if ((i % 3 == 0) && (i % 5 == 0)){
          console.log( i,'fizzbuzz')
         
     }
    //  se è multiplo di 3 assegno la stringa fizz
         else if (i % 3 == 0){
        console.log(i,'fizz')
         
        }
        // se è multiplo di 5 assegno la stringa buzz
        else if (i % 5 == 0){
            console.log(i,'buzz')
             
         }
        //  altrimenti stampa solo i numeri
         else if (i % 2 == 0){
            console.log(i)
             
         }
    
         
       
    }