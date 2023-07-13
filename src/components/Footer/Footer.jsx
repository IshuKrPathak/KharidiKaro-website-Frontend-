import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"
const Footer = () => {
    return <div className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, porro Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti fugit vel error libero perferendis neque iusto ullam asperiores nihil. Ex ducimus deleniti tenetur ipsam facilis dolore fugiat fugit earum!</div>

            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text"> Phone: 8210754807 </div>
                </div>

                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: Kharido_Karo@gmail.com</div>
                </div>

                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">Near Kings Fort Hotel Malviya Nagar Durg Chattisgarh 491001</div>
                </div>
            </div>
            <div className="col"><div className="title">Categories</div>
                <span className="text">Ladies</span>
                <span className="text">Mens </span>
                <span className="text">Kids </span>
                <span className="text"> Baby</span>
                <span className="text">Kharidi Karo </span>
                <span className="text">Sports</span>
            </div>

            <div className="col"><div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & conditions</span>
                <span className="text"> Contact us</span>
                
            </div>
        </div>
        <div className="botton-bar">
            <div className="bottom-bar-content">
                <div className="text"> Made with 💗 by  ISHU PATHAK </div>
                <img src={Payment} alt="payment methods" />
            </div>
        </div>
    </div>

}

export default Footer;
