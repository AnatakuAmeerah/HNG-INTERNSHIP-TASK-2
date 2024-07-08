import { Link } from "react-router-dom"

function Checkout() {
    return (
        <>
            <section className="checkout">
                <div className="checkout-1">
                    <img className="frame-53" src="./Frame 53.svg" alt="" />
                    <div>
                        <p className="turner">Turner essentials</p>
                        <div className="size">Size <input type="number" /></div>
                        <div className="size">Quantity <input type="number" /></div>
                        <p className="PRICE">Price: $ 201.00</p>
                        <button>Remove</button>
                    </div>
                </div>
                <div className="checkout-1">
                     <img className="frame-53" src="./Frame 53.svg" alt="" />
                    <div>
                        <p className="turner">Turner essentials</p>
                        <div className="size">Size <input type="number" /></div>
                        <div className="size">Quantity <input type="number" /></div>
                        <p className="PRICE">Price: $ 201.00</p>
                        <button>
                            Remove
                            </button>
                      
                    </div>

                </div>

            </section>
            <Link className="link" to="/payment-success">
            <button className="go-to-checkout">Go To Checkout</button>
            </Link>
        </>
    )
}
export default Checkout

