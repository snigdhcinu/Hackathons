 let beerImg = [];
 let limit = 20;  // limitation to data to show
 let offset = 0;  // starting pt. of from where we need to show data.


// Getting images.
fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        // console.log(data);

       let size = data.length;
       for(let i = 0 ; i < size ; i++){
        beerImg[i] = data[i];
       }
        console.log(beerImg)

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  })

// returning random images
function randImg(){
  let index = Math.floor(Math.random()*beerImg.length);
  return beerImg[index].image;
}


// Getting beer information

fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        // console.log(data);
        let element = document.getElementsByClassName('cards')[0];
        let parent = document.getElementById('result');
        let clone;
       
        // Create cards elements
        // data.length - 1
       for(let i = 0 ; i < 20 ; i++){
        clone = element.cloneNode(true);
        parent.appendChild(clone);
       }
       console.log(parent)

       // Adding elements to each of the card elements
       for(let i = 0 ; i < data.length ; i++){
        element = document.getElementsByClassName('cards')[i];
        document.getElementsByClassName('category')[i].innerText = data[i].category;
        document.getElementsByClassName('img')[i].src = randImg();
        document.getElementsByClassName('name')[i].innerText = data[i].name;
        document.getElementsByClassName('description')[i].innerText = data[i].description;
        document.getElementsByClassName('btn')[i].innerHTML = `<a id=${data[i].id} href='payment.html' target='_blank'>$ ${data[i].price}</a>`;
       }
       
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  })





























// in response.json().then(function(data){.........})  14 onwards.

  //  

       //  document.getElementsByClassName('btn')[i].addEventListener('click',function(event){
       //    // console.log(event.target.id)
       //    sessionStorage.setItem('item-selected-for-payment',event.target.id);
       //  })
       // }