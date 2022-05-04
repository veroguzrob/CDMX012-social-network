// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

import { registerUser } from '../lib/auth.js';

export const register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.classList = ('container');

  const homeRegister = document.createElement('h2');
  homeRegister.textContent = 'Register';

  const registerMail = document.createElement('input');
  registerMail.placeholder = 'Correo';
  registerMail.setAttribute('type', 'email');
  registerMail.classList = ('input');

  const registerPassword = document.createElement('input');
  registerPassword.placeholder = 'Contraseña';
  registerPassword.setAttribute('type', 'password');
  registerPassword.classList = ('input');

  const registerButton = document.createElement('button');
  registerButton.className = ('new');
  registerButton.textContent = 'Register';
  registerButton.addEventListener('click', () => {
    registerUser(registerMail.value, registerPassword.value).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('ya se registró', user);
      // ...
    })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log('No se registro nadie', error);
      // ..
      });
  });

  const buttonHome = document.createElement('button');
  buttonHome.className = ('start');
  buttonHome.textContent = 'Return Home';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  registerDiv.append(homeRegister, registerMail, registerPassword, registerButton, buttonHome);
  return registerDiv;
};
