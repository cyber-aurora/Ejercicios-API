
const tbody = document.querySelector('#user-table tbody');


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {

    users.forEach(user => {
      const row = tbody.insertRow();

      const idCell = row.insertCell();
      idCell.appendChild(document.createTextNode(user.id));
      const nameCell = row.insertCell();
      nameCell.appendChild(document.createTextNode(user.name));
      const cityCell = row.insertCell();
      cityCell.appendChild(document.createTextNode(user.address.city));
    });
  })
  .catch(error => {
    console.error(error);
  });
