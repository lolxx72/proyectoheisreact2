import React from 'react';
import { useRef } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link} from 'react-router-dom';
import { createOrdenCompra, getOrden, getProduct, updateProd } from '../../firebase/firebase';
import { toast } from 'react-toastify';


const Checkout = () => {

    const datForm = useRef()
    const {Cart, totalPrice, emptyCart} = useCartContext()

    const consultoForm = (e) => {

        e.preventDefault()
        const datos  = new FormData(datForm.current)
        const cliente = Object.fromEntries(datos)

        const aux = [...Cart]
        aux.forEach(prodCart => {
            getProduct(prodCart.id).then(prodBDD => {
                if(prodBDD.stock >= prodCart.cant) {
                    prodBDD.stock -= prodCart.cant
                    updateProd(prodCart.id, prodBDD)
                } else {
                    console.log("El stock no es mayor o igual a la cantidad que se quiere comprar.")
                }
            })
        })

        createOrdenCompra(cliente, totalPrice(), aux.map(prod => ({id: prod.id, quantity: prod.quantity, precio: prod.precio})), new Date().toLocaleString('es-AR', {timeZone: Intl.DateTimeFormat().resolvedOptions()})).then(ordenCompra => {
                toast.info('🦄 Gracias por tu compra, nos comunicaremos para seguir con ella', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            emptyCart()
            e.target.reset()


        })
        .catch(error => {
            console.error(error)
        })



    }
    return (
        <>
        {
            Cart.length === 0 ?
            <>
            <h2>Para realizar la compra debe tener al menos un producto en el carrito!</h2>
            <Link className="nav-link" to={"/"}><button className='btn btn-primary'>Continuar comprando</button></Link>
            </>
            :
        <div className='container divForm'>
            <form onSubmit={consultoForm} ref={datForm}>
                <div className='mb-3'>
                    <label htmlFor="nombre" className='form-label'>Nombre y Apellido</label>
                    <input type="text" className='form-control' name='nombre' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" className='form-control' name='email' required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>Repetir email</label>
                    <input type="email" className='form-control' name='email2' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="dni" className='form-label'>DNI</label>
                    <input type="number" className='form-control' name='dni' required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="tel" className='form-label'>Numero de telefono</label>
                    <input type="number" className='form-control' name='telefono' required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="dire" className='form-label'>Direccion</label>
                    <input type="text" className='form-control' name='direccion' required/>
                </div>
                <button type='submit' className='btn btn-primary'>Finalizar compra</button>
            </form>
            
        </div>
    }
    </>
    );
}

export default Checkout;
