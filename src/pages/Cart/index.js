


const Cart = ()=>{
    return(
        <>
        <section className="section">
            <div className="container">
                <h2>Your Cart</h2>
                <p>There are<b>3</b>products in your cart</p>

                <div className="table-responsive"> 
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                            </tr>
                        <tr></tr>
                    </table>
                </div>
            </div>
        </section>
        </>
    )
}

export default Cart;