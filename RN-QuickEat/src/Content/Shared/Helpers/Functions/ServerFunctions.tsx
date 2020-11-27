import firebase from '~/API/FirebaseConfig';

export const getImages = async (storageRef: string) => {
  const storage = firebase.storage();
  const ref = storage.ref(storageRef);

  const list = await ref.listAll();
  const urls = list.items.map(async (item) => {
    const imageRef = storage.ref(`${storageRef}/${item.name}`);
    const url = await imageRef.getDownloadURL();
    return url;
  });

  return Promise.all(urls);
};
