import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";
import products from "../json/products.json";

// INITIALIZE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyAB7EMtKd2RHpMeE__q6c5KJqodkd4fohQ",
  authDomain: "freesia-416b2.firebaseapp.com",
  projectId: "freesia-416b2",
  storageBucket: "freesia-416b2.appspot.com",
  messagingSenderId: "800500321346",
  appId: "1:800500321346:web:e14699656c9adc47dc31db",
  measurementId: "G-7KC28HGWMB"
};

firebase.initializeApp(firebaseConfig);

const store = firebase.firestore();
store.enablePersistence()
.catch(function(err) {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
        console.log(err.code);
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
        console.log(err.code);
    }
});



// REFERENCE PRODUCTS
const productsCollectionRef = store.collection("products");
const productsDocRef = productsCollectionRef.doc("json");
const allProductsCollectionRef = productsDocRef.collection("allPerfumes");

export const getProductById = async (productId) => {
  // REFERENCE PRODUCTS COLLECTION
  const doc = await allProductsCollectionRef.doc(productId).get();
  return doc.data()
}

export const getProducts = async (url) => {
  const collection = jsonInfo.find(element => element.url === url);
  const collectionName = collection.name || "allProducts";
  let jsonProducts = [];

  // QUERY PRODUCTS
  let querySnapshot;
  if (collectionName === "allProducts")
    querySnapshot = await allProductsCollectionRef.get();
  else
    querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
  querySnapshot.forEach((doc) => {
    jsonProducts.push(doc.data());
  });
  return jsonProducts;
}

export const feedProducts = () => {
  products.forEach((product) => {
    const docRef = allProductsCollectionRef.doc();
    const id = docRef.id;
    // Store Data for Aggregation Queries
    docRef.set({
      ...product,
      id
    });
  })
}

export const authenticateAnonymously = () => {
  return firebase.auth().signInAnonymously();
};