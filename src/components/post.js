// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { singOutUser } from '../lib/authConfig.js';
import { createPost, onGetPost, deletePost } from '../lib/postConfig.js';

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
      // console.log('salio de la cuenta');
      onNavigate('/');
    }).catch(() => {
      // An error happened.
      // console.log(error);
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
      // console.log('no esta funcionando');
    });
  });
  writePublication.append(postWrite, postPublic);

  // Fetch Firestore Posts
  const containerPublications = document.createElement('section');
  containerPublications.className = ('edition');
  onGetPost((querySnapshot) => {
    containerPublications.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      const textPost = postData.text;
      const containerPost = document.createElement('div');
      containerPost.className = ('divBox');
      const textPublication = document.createElement('p');
      textPublication.append(textPost);

      const postDelete = document.createElement('button');
      postDelete.className = ('delete');
      postDelete.textContent = 'Delete';
      postDelete.id = doc.id;

      const postEdit = document.createElement('button');
      postEdit.className = ('edit');
      postEdit.textContent = 'Edit';

      containerPost.append(textPublication, postDelete, postEdit);

      const btnsDelete = containerPost.querySelectorAll('.delete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deletePost(e.target.id);
        });
      });

      containerPublications.append(containerPost);

      // console.log(textPost);
    });
  });

  postMain.append(headPublication, writePublication, containerPublications);
  return postMain;
};
