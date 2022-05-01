// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.classList = ('container');

  const titleApp = document.createElement('h1');
  titleApp.textContent = 'Book Lovers';

  const startMail = document.createElement('input');
  startMail.placeholder = 'Correo';
  startMail.setAttribute('type', 'email');
  startMail.classList = ('input');

  const startPassword = document.createElement('input');
  startPassword.placeholder = 'Contraseña';
  startPassword.setAttribute('type', 'password');
  startPassword.classList = ('input');

  const startButton = document.createElement('button');
  startButton.textContent = 'Sing In';
  startButton.className = ('start');
  startButton.addEventListener('click', () => {
    onNavigate('/post');
  });

  const textNewAccount = document.createElement('h5');
  textNewAccount.textContent = 'No account yet?';

  const buttonNewAccount = document.createElement('button');
  buttonNewAccount.textContent = 'New Account';
  buttonNewAccount.className = ('new');
  buttonNewAccount.addEventListener('click', () => {
    onNavigate('/register');
  });
  homeDiv.append(titleApp, startMail, startPassword, startButton, textNewAccount, buttonNewAccount);
  return homeDiv;
};
