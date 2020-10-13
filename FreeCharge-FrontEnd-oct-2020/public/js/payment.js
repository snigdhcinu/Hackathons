let itemId = sessionStorage.getItem('item-selected-for-payment')
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
        // let item = JSON.stringify(data[itemId])
        let item = data[itemId]
        document.getElementById('paymentDetails').innerHTML = `<p>Paying for :-  ${item.name}</p>
        <p>Order Detail :-  ${item.description}</p>
        <p>Total Amount :-  $${item.price}</p>
        <hr>
        <div id='mode'>Select Payment Mode 
          <input type = 'radio' value = 'Credit Card'>
          <label>Credit Card</label>
          <input type = 'radio' value = 'Debit Card'>
          <label>Debit Card</label>
          <input type = 'radio' value = 'Net Banking'>
          <label>Net Banking</label>
          <input type = 'radio' value = 'Cash Card'>
          <label>Cash Card</label>

        </div>
        `
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  })