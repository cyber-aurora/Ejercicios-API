const userIdInput = document.querySelector('#user-id-input');
const getUserButton = document.querySelector('#get-user-button');
const userDataDiv = document.querySelector('#user-data');

getUserButton.addEventListener('click', () => {
  const userId = userIdInput.value;


  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {

      userDataDiv.innerHTML = `<p>Name: ${user.name}</p><p>Phone: ${user.phone}</p>`;
    })
    .catch(error => {
      console.error(error);
    });
});
