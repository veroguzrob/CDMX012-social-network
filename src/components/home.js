/* eslint-disable max-len */
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { singInUser } from '../lib/authConfig.js';

export const home = () => {
  const homeDiv = document.createElement('main');
  homeDiv.classList = ('container');

  const titleApp = document.createElement('h1');
  titleApp.textContent = 'Book Lovers';

  const singInMail = document.createElement('input');
  singInMail.placeholder = 'Correo';
  singInMail.setAttribute('type', 'email');
  singInMail.classList = ('input');

  const singInPassword = document.createElement('input');
  singInPassword.placeholder = 'Contraseña';
  singInPassword.setAttribute('type', 'password');
  singInPassword.classList = ('input');

  const singInButton = document.createElement('button');
  singInButton.textContent = 'Sing In';
  singInButton.className = ('start');
  singInButton.addEventListener('click', () => {
    singInUser(singInMail.value, singInPassword.value).then(() => {
      // Signed in
      // console.log('Hola');
      // const user = userCredential.user;
      // console.log(user);
      onNavigate('/post');
      // console.log('si entra a las publicaciones', user);
      // ...
    })
      .catch(() => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
        // console.log('no funciono el metodo', error);
      });
  });

  const textNewAccount = document.createElement('h5');
  textNewAccount.textContent = 'No account yet?';

  const buttonNewAccount = document.createElement('button');
  buttonNewAccount.textContent = 'New Account';
  buttonNewAccount.className = ('new');
  buttonNewAccount.addEventListener('click', () => {
    onNavigate('/register');
  });
  homeDiv.append(titleApp, singInMail, singInPassword, singInButton, textNewAccount, buttonNewAccount);
  return homeDiv;
};
