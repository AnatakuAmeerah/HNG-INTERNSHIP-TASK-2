function Checkout() {
    return (
        <>
            <section className="checkout">
                <div className="checkout-1">
                    <div> <img className="frame-53" src="./Frame 53.svg" alt="" /></div>
                    <div>
                        <p className="turner">Turner essentials</p>
                        <div className="size">Size <input type="number" /></div>
                        <div className="size">Quantity <input type="number" /></div>
                        <p className="PRICE">Price: $ 201.00</p>
                        <button>Remove</button>
                    </div>
                </div>
                <div className="checkout-1">
                    <div > <img className="frame-53" src="./Frame 53.svg" alt="" /></div>
                    <div>
                        <p className="turner">Turner essentials</p>
                        <div className="size">Size <input type="number" /></div>
                        <div className="size">Quantity <input type="number" /></div>
                        <p className="PRICE">Price: $ 201.00</p>
                        <button>Remove</button>
                    </div>

                </div>

            </section>
            <button className="go-to-checkout">Go To Checkout</button>
        </>
    )
}
export default Checkout

