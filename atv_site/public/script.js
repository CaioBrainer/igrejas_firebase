// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Q4Bw71c0aRi6nMyhQznR9ZMlWFBpolg",
  authDomain: "atv-ext-uninter.firebaseapp.com",
  projectId: "atv-ext-uninter",
  storageBucket: "atv-ext-uninter.firebasestorage.app",
  messagingSenderId: "937201550634",
  appId: "1:937201550634:web:f13f79cb3a8a195c1e8a53"
};

// Inicializar Firestore no Firebase 8.x
const app = initializeApp(firebaseConfig);
const db = getFirestore();


  // Recuperar dados da coleção "produtos"
  async function fetchData() {
    try {
      const querySnapshot = await getDocs(collection(db, "produtos"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
          <h2>${data.nome}</h2>
          <p>Price: ${data.preco}</p>
          <p>Description: ${data.descricao}</p>
        `;
        document.getElementById("data-container").appendChild(productDiv);
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  }

  fetchData();