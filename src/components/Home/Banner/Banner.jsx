import "./Banner.scss";
import BannerImg from '../../../assets/banner.png'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIN,} from "react-icons/fa"

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>Kharidi Karo</h1>
                <p> A truly Indian Website to promote SWADESHI CLOTHES in INDIA.</p>


                <div className="ctas">
                    <div className="button-cta">Read More</div>
                    <div className="button-cta v2">Shop Now</div>
                </div>


            </div>
            <img className="banner-img" src={BannerImg} alt="Banner-Img" />
        </div>
        <div className="social-icons">
                <div className="icons">
                    <FaFacebookF size={14}/>
                </div>
                <div className="icons">
                    <FaTwitter size={14}/>
                </div>
                <div className="icons">
                    <FaInstagram size={14}/>
                </div>
                {/* <div className="icons">
                    <FaLinkedinIN/>
                </div> */}
            </div>
    </div>;
};

export default Banner;
