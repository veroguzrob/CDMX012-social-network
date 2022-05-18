// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

import { registerUser } from '../lib/authConfig.js';

export const register = () => {
  const registerDiv = document.createElement('main');
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
    registerUser(registerMail.value, registerPassword.value).then(() => {
      // Signed in
      // const user = userCredential.user;
      onNavigate('/');
      // console.log('ya se registró', user);
      // ...
    })
      .catch(() => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log('No se registro nadie', error);
      // ..
      });
  });

  registerDiv.append(homeRegister, registerMail, registerPassword, registerButton);
  return registerDiv;
};
