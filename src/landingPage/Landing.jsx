
import Products from "./ProductList"

function Landing() {
    return (
        <>

            {/* heading1 */}
            <section>
                {/* heading1 */}
                <h3 className="welcome">Welcome to LabelLeux</h3>
                <h3 className="free">Free Shipping on Membership Plan</h3>
                {/* heading2 */}
                <div className=" featured">
                    <h1 className="feat-prodct">Featured Products</h1>
                    <p className="find-what">Find what you love in our collection</p>
                </div>
                {/* products same margin */}
                <Products />
            </section>
            <section className="discount">
                <p className="save20">Save 20% Today!</p>
                <div className="Explore">Explore More</div>
            </section>
            {/* shop react scroll */}
            <section >
                <p className="new-arrivals">New Arrivals</p>
                <Products />
                <div className="discount-2">
                    <div className="discount-2a">
                        <p className="amazing-offers">Amazing offers await</p>
                        <p className="get-free">Buy one get one free!</p>
                        <p className="snag-best-dresses">Snag the best classy dresses on sale at Labelluxe</p>
                        <p className="learn-more">Learn more</p>
                    </div>
                    <div className="discount-2b">
                        <p className="amazing-offers" >Summer & spring collection</p>
                        <p className="seasons-essentials">Seasons essentials</p>
                        <p className="snag-best-dresses">Shop the best shirts on labelluxe</p>
                        <p className="collection">Collection</p>
                    </div>
                </div>
                <div className="products-2">
                    <p className="Shoe-Collections">Shoe Collections</p>
                    <p className="Seasonal-Sales">Seasonal Sales</p>
                    <p className="mens">Men's</p>
                </div>
            </section>
            {/* newsletter */}
            <section className="newsletter">
                <div className="news-letter-a">
                    <p className="sign-up-news">Sign Up for Newsletters</p>
                    <p className="email-update">Get Email updates about latest offers</p>
                </div>
                <div >
                    <input className="enter-email" type="text" placeholder="Enter your email address" />
                  <button className="sign-up">Sign Up</button>
                </div>

            </section>
            {/* footer */}
            <section className="footer">
                <div className="footer-a">
                    <img className="footer-logo" src="./Frame 22.svg" alt="logo" />
                    <p className="footer-header">Contact</p>
                    <p> <span className="footer-header">Address:</span> 124 Wellington Road, Street 40, Ikeja</p>
                    <p><span className="footer-header">Phone:</span> +234 9034950645, +234 8034550564</p>
                    <p><span className="footer-header">Hours:</span> 09:00 - 20:00 Mon - Sat</p>
                    <p className="follow-us"> Follow us</p>
                    <div className="socials">
                        <img src="./x.svg" alt="icon" />
                        <img src="./logos_facebook (1).svg" alt="icon" />
                        <img src="./Group (1).svg" alt="icon" />
                    </div>
                </div>
                <div className="footer-b">
                    <div className="footer-bi">
                        <div>
                            <p className="footer-headers">About</p>
                            <p>About Us</p>
                            <p>Delivery Information</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div>
                            <p className="footer-headers">My Account</p>
                            <p>Sign In</p>
                            <p>View Cart</p>
                            <p>My Wishlist</p>
                            <p>Track My Order</p>
                            <p>Help</p>

                        </div>
                    </div>
                    <div className="footer-bii">
                        <p className="footer-headers">Install App</p>
                        <p>From App Store or Google Play</p>
                        <div className="app-store"> App Store <img src="./logos_apple-app-store.svg" alt="" /></div>
                         <p className="secured-payment">Secured Payment Gateways</p>
                         <div className="socials">
                            <img src="./logos_paypal.svg" alt="" />
                            <img src="./Vector (7).svg" alt="" />
                            <img src="./logos_mastercard.png" alt="" />
                         </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Landing