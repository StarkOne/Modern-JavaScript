document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();
  xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if( this.status === 200) {
      const respone = JSON.parse(this.responseText);
      
      let output = '';
      
      if(respone.type === 'success') {
        respone.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}


// урок 59

// document.getElementById('button1').addEventListener('click', loadCustomer);

// document.getElementById('button2').addEventListener('click', loadCustomerAll);

// function loadCustomer(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customer.json', true);
//   xhr.onload = function () {
//     if( this.status === 200) {
//       console.log(this.responseText);

//       const customer = JSON.parse(this.responseText);

//       const output = `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul>
//       `;
//       document.getElementById('customer').innerHTML = output;
//     }
//   }
//   xhr.send();
// }

// function loadCustomerAll(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customers.json', true);
//   xhr.onload = function () {
//     if( this.status === 200) {

//       const customers = JSON.parse(this.responseText);

//       let output = '';
//       customers.forEach(function(customer) {
//         output += `
//           <ul>
//             <li>ID: ${customer.id}</li>
//             <li>Name: ${customer.name}</li>
//             <li>Company: ${customer.company}</li>
//             <li>Phone: ${customer.phone}</li>
//           </ul>
//         `;
//       });

//       document.getElementById('customers').innerHTML = output;
//     }
//   }
//   xhr.send();
// }