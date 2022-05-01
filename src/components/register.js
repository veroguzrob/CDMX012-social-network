// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

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

  const buttonHome = document.createElement('button');
  buttonHome.className = ('start');
  buttonHome.textContent = 'Return Home';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });
  registerDiv.append(homeRegister, registerMail, registerPassword, buttonHome);
  return registerDiv;
};
