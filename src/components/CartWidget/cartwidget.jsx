const CartWidget = ({ cantCarrito }) => {
    return (
      <>
        <button className="btn btn-outline-dark"><i className="fas fa-shopping-cart fa-lg"></i>
</button>
        <p>{cantCarrito}</p>
      </>
    )}

export default CartWidget