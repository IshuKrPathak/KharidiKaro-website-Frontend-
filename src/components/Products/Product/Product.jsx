import "./Product.scss";
import product from "../../../assets/products/product.jpg";
const Product = ({ id, data }) => {
  return (
    <div className="product-card">
      {/* <div className="thumbnail">
            <media src={process.env.REACT_APP_DEV_URL +
                        data.media.data[0].attributes.url} alt="" />
         
        </div> */}
      <div className="thumbnail">
        {data &&
          data.media &&
          data.media.data &&
          data.media.data[0] &&
          data.media.data[0].attributes && (
            <img
              src={
                process.env.REACT_APP_DEV_URL + data.media.data[0].attributes.url
              }
              alt="this is available"
            />
          )}
      </div>

      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price"> &#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
