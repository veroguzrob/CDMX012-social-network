export const listPost = () => {
  const p = document.createElement('p');
  p.textContent = 'prueba';
  return p;
};

/*
window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getPost();
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });
*/
