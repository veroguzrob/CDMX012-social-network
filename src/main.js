/* eslint-disable import/no-cycle */
// Este es el punto de entrada de tu aplicacion
import { home } from './components/home.js';
import { register } from './components/register.js';
import { postPage } from './components/post.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/post': postPage,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());
