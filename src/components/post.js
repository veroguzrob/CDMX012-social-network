// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { singOutUser } from '../lib/auth.js';
import { createPost } from '../lib/post.js';

export const postPage = () => {
  const postMain = document.createElement('main');
  postMain.classList = ('container');

  // Tittle and close
  const headPublication = document.createElement('section');
  headPublication.className = ('goOut');
  const postTittle = document.createElement('h3');
  postTittle.textContent = 'Publications';
  // Close formPublications
  const postClose = document.createElement('button');
  postClose.className = ('close');
  postClose.textContent = 'Sign Out';
  postClose.addEventListener('click', () => {
    singOutUser().then(() => {
      // Sign-out successful.
      console.log('salio de la cuenta');
      onNavigate('/');
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  });
  headPublication.append(postTittle, postClose);

  // Write publication
  const writePublication = document.createElement('section');
  writePublication.className = ('publication');
  const postWrite = document.createElement('input');
  postWrite.setAttribute('type', 'textarea');
  postWrite.placeholder = 'Write your post';
  postWrite.className = ('write');
  const postPublic = document.createElement('button');
  postPublic.className = ('post');
  postPublic.textContent = 'Post';
  postPublic.addEventListener('click', () => {
    createPost(postWrite.value).then(() => {
      postWrite.value = '';
    }).catch(() => {
      console.log('no esta funcionando');
    });
  });
  writePublication.append(postWrite, postPublic);

  // Fetch Firestore Posts
  const editPublication = document.createElement('section');
  editPublication.className = ('edition');
  const postDelete = document.createElement('button');
  postDelete.className = ('delete');
  postDelete.textContent = 'Delete';
  const postEdit = document.createElement('button');
  postEdit.className = ('edit');
  postEdit.textContent = 'Edit';
  editPublication.append(postDelete, postEdit);

  postMain.append(headPublication, writePublication, editPublication);
  return postMain;
};
