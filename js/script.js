// recupero la scacchiera
let chessboard = document.querySelector('.chessboard')

// creo un ciclo che mi stampi numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    

// creo il quadrato
let square = document.createElement('div')
square.classList.add('square')



    // se è multiplo sia di 3 che di 5 assegno la stringa fizzbuzz
        if ((i % 3 == 0) && (i % 5 == 0)){
          console.log( i,'fizzbuzz')
         square.innerText = ( i,'fizzbuzz');
         square.classList.add('red')
     }
    //  se è multiplo di 3 assegno la stringa fizz
         else if (i % 3 == 0){
        console.log(i,'fizz')
        square.innerText = ( i,'fizz');
        square.classList.add('green')
        }
        // se è multiplo di 5 assegno la stringa buzz
        else if (i % 5 == 0){
            console.log(i,'buzz')
            square.innerText = ( i,'buzz');
            square.classList.add('yellow')
         }
        //  altrimenti stampa solo i numeri
         else if (i % 1 == 0){
            console.log(i)
            square.innerText = (i);
            square.classList.add('blu')
         }
    
         
       chessboard.append(square);
    }