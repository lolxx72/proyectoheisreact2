import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "pet-funes-react.firebaseapp.com",
  projectId: "pet-funes-react",
  storageBucket: "pet-funes-react.appspot.com",
  messagingSenderId: "6213237017",
  appId: "1:6213237017:web:71c9cc70cdf9df5fbd6d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const BDD = getFirestore()

export const createProd = async () => {
    const promise = await fetch('./json/productos.json')
    const prod = await promise.json()
    prod.forEach(async (product) => {
        await addDoc(collection(BDD, "productos"),  {
            nombre: product.nombre,
            marca: product.marca,
            idCategoria: product.idCategoria,
            stock: product.stock,
            img: product.img,
            precio: product.precio


        })
    })
}


export const getProds = async() => {
const prods = await getDocs(collection(BDD, "productos"))
const items = prods.docs.map(prod => {
    return {...prod.data(), id: prod.id}
    })
return items
}

export const getProduct = async (id) => {
    const prod = await getDoc(doc(BDD, "productos", id))
    const item = {...prod.data(), id: prod.id}
    return item
}

export const createOrdenCompra = async(cliente, precioTotal, Cart, fecha) => {
    const ordenCompra = await addDoc(collection(BDD, "ordenCompra"), {
        cliente: cliente,
        precioTotal: precioTotal,
        fecha: fecha, 
        items: Cart,

    })
    console.log(ordenCompra)
}

export const getOrden = async(id) => {
    const ordenCompra = await getDoc(doc(BDD, "ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    console.log(item)
}

export const updateProd = async (id, info) => {
    const estado = await updateDoc(doc(BDD, "productos", id), info)
    console.log(estado)
}

export const deleteProd = async(id) => {
    const estado = await delete(doc(BDD, "productos", id))
    return estado

}
