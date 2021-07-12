let cards=[
    {
        image:"https://i.pinimg.com/564x/20/b1/8e/20b18e52356608c18ccb0044853b099d.jpg",
        value:"1",
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/564x/20/b1/8e/20b18e52356608c18ccb0044853b099d.jpg",
        value:"1",
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/564x/57/17/73/5717734a2a95a22f891b721aee5946f3.jpg",
        value:"2",
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/564x/57/17/73/5717734a2a95a22f891b721aee5946f3.jpg",
        value:"2",
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/564x/36/5c/d3/365cd3aee19f20f8a1daca87825e59f4.jpg",
        value:"3",
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/564x/36/5c/d3/365cd3aee19f20f8a1daca87825e59f4.jpg",
        value:"3",
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/564x/2c/6e/19/2c6e19ec6f01aa01fc79b78dd8a253de.jpg",
        value:"4",
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/564x/2c/6e/19/2c6e19ec6f01aa01fc79b78dd8a253de.jpg",
        value:"4",
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/564x/84/ad/0f/84ad0fabe14dc2da528e52b68da4ef4f.jpg",
        value:"5",
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/564x/84/ad/0f/84ad0fabe14dc2da528e52b68da4ef4f.jpg",
        value:"5",
        status:"closed"

    },
]

//Dursten shuffling algorithm

for(let i=cards.length-1; i>=0; i--){

    let j =Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;

}


function displayCards(data){

    let cardsString = "";

    data.forEach(function(card,index){
         
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
        
            <div class="overlay ${card.status}" onclick="openCard(${index})">
            </div>
        </div>  `;
    });

 document.getElementById('cards').innerHTML = cardsString;

}

displayCards(cards);

console.log(cards);

let cardCount = 1;
let val1 = null , val2 = null;
let score = 0;
 function openCard(index){

     console.log(cards);

     cards[index].status = "opened";
     if(cardCount===1){
         val1 = cards[index].value;
         cardCount++;
     }
     else if(cardCount === 2){
         val2 = cards[index].value;
         if(val1 === val2){
             score++;

             document.getElementById('score').innerText = score;

            //  reset after one guess
            val1 = null;
            val2 = null;
            cardCount = 1;
         }

         else{
             alert("Oops!!You need few drops of Felicis Felix!")
             location.reload();
         }
     }

     displayCards(cards);
 }

