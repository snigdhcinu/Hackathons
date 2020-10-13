fetch('http://starlord.hackerearth.com/recipe')
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
       for(let i = 0 ; i < data.length-1 ; i++){
        clone = element.cloneNode(true);
        parent.appendChild(clone);
       }
       console.log(parent)

       // Adding elements to each of the card elements
       for(let i = 0 ; i < data.length ; i++){
        element = document.getElementsByClassName('cards')[i];
        document.getElementsByClassName('category')[i].innerText = data[i].category;
        document.getElementsByClassName('img')[i].src = data[i].image;
        document.getElementsByClassName('name')[i].innerText = data[i].name;
        document.getElementsByClassName('description')[i].innerText = data[i].description;
        document.getElementsByClassName('btn')[i].innerHTML = `<a id=${data[i].id} href='payment.html' target='_blank'>$ ${data[i].price}</a>`;

        document.getElementsByClassName('btn')[i].addEventListener('click',function(event){
          // console.log(event.target.id)
          sessionStorage.setItem('item-selected-for-payment',event.target.id);
        })
       }


      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  })


