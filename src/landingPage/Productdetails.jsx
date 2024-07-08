import { Link } from "react-router-dom"
function ProductDetails() {
  return (
    <>
      <section className="product-details">
      <img className="product-details-img" src="./Frame 53.svg " alt="nike shoe" />
     
     <div className="product-details-text">   
      <h4>Home/ Shop / Shoes</h4>
        <h3>Nike Air 1s</h3>
        <p className="running-shoes">Men’s Running Shoes</p>
        <p className="price">$70.99</p>
        <div className="select">Select Size</div>
        <div className="select">Select Color</div>
        <div className="amount">
          <div className="symbol-1">-</div>
          <div className="one">1</div>
          <div className="symbol-2">+</div>
          <Link className="link" to="/checkout">
          <button>Add To Cart</button>
          </Link>

        </div>
        <div className="lorem">
          <h2>Product Details</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Eu id enim tortor vestibulum faucibus. Pulvinar in sit odio convallis. Ultrices facilisis mi pulvinar sed. Erat convallis blandit viverra quisque vitae. Massa et in eget leo at eleifend gravida sagittis. Pellentesque fusce neque euismod augue. Faucibus purus sit eleifend pellentesque Dolor porta consectetur feugiat ac mauris. Lacus orci felis molestie risus</p>
        </div></div>
      </section>
    </>

  )
}
export default ProductDetails