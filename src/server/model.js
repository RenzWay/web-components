import { db } from "./firebase";
import { getDoc, addDoc, doc, collection, getDocs } from "firebase/firestore";

async function fetching() {
  try {
    const response = await getDocs(collection(db, "components"));
    const queue = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return queue;
  } catch (error) {
    console.error(error);
  }
}

async function addCode(title, code, path) {
  try {
    const response = await addDoc(collection(db, path), {
      title: title,
      code: code,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export { addCode, fetching };
