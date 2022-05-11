// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { singOutUser } from '../lib/auth.js';
import { createPost } from '../lib/post.js';

export const postPage = () => {
  const postMain = document.createElement('main');
  postMain.classList = ('container');
  // Tittle
  const postTittle = document.createElement('h3');
  postTittle.textContent = 'Publications';

  // Close formPublications
  const postClose = document.createElement('button');
  postClose.className = ('close');
  postClose.textContent = 'Close';
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

  // Write publication
  const postWrite = document.createElement('input');
  postWrite.setAttribute('type', 'textarea');
  postWrite.setAttribute('rows', '6');
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

  // Fetch Firestore Posts
  const postDelete = document.createElement('button');
  postDelete.className = ('edit');
  postDelete.textContent = 'Delete';
  const postEdit = document.createElement('button');
  postEdit.className = ('edit');
  postEdit.textContent = 'Edit';

  postMain.append(postTittle, postClose, postWrite, postPublic, postDelete, postEdit);
  return postMain;
};
