import "./SingleProduct.scss";
import ReleatedProducts from "../SingleProduct/RelatedProducts/RelatedProducts"
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaCartPlus } from "react-icons/fa"
import prod from "../../assets/products/product.jpg"
import "./SingleProduct.scss"
const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt="product-image" />
                </div>
                <div className="right">
                    <span className="name">Product Name</span>
                    <span className="price">Product Price</span>
                    <span className="desc">Product Price</span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>4</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-button"><FaCartPlus size={20} />
                            ADD TO CART</button>
                    </div>
                    <span className="divider"></span>
                    <div className="info-item">
                        <span className="text-bold">Category:
                            <span>Jeans</span>
                        </span>

                    </div>

                    <div className="info-item">
                        <span className="text-bold">Share:
                            <span className="social-icons">
                                <FaFacebookF size={16} />
                                <FaTwitter size={16} />
                                <FaInstagram size={16} />
                                <FaPinterest size={16} />

                            </span>
                        </span>

                    </div>
                </div>
            </div>
            <ReleatedProducts/>
        </div>
    </div>;
};

export default SingleProduct;
