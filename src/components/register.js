// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

import { createUser } from '../lib/auth.js';

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

  const buttonRegister = document.createElement('button');
  buttonRegister.className = ('new');
  buttonRegister.textContent = 'Register';
  buttonRegister.addEventListener('click', () => {
    createUser(registerMail.value, registerPassword.value).then((userCredential) => {
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

  registerDiv.append(homeRegister, registerMail, registerPassword, buttonRegister, buttonHome);
  return registerDiv;
};
