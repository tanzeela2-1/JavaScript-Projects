const users = [
  { name: 'tanzeela', password: '1234' },
  { name: 'mehvish', password: 'password' },
];
const login = () => {
  const userName = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();
  const errorMessage = document.querySelector('#error-message');

  // check empty fields
  if (userName === '' || password === '') {
    errorMessage.textContent = 'Please fill all fields!';
    return;
  }
  // find  user
  let user = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].name === userName) {
      user = users[i];
      break;
    }
  }

  if (!user) {
    errorMessage.textContent = ' Invalid username!';
  } else if (user.password !== password) {
    errorMessage.textContent = ' Wrong password!';
  } else {
    //successful login
    document.querySelector('#login-page').style.display = 'none';
    document.querySelector('#welcome-page').style.display = 'block';

    document.querySelector(
      '#welcome-text'
    ).textContent = `Welcome, ${userName}`;
    errorMessage.textContent = '';
  }
};
//logout function
function logout() {
  document.querySelector('#login-page').style.display = 'block';
  document.querySelector('#welcome-page').style.display = 'none';
  document.querySelector('#username').value = '';
  document.querySelector('#password').value = '';
}
