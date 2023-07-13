// import {useNavigate} from "react-router-dom";
// import "./Category.scss";
// import arrival1 from "../../assets/category/arrival-1.png";
// import arrival2 from "../../assets/category/arrival-2.png";
// import arrival3 from "../../assets/category/arrival-3.png";
// import arrival4 from "../../assets/category/arrival-4.png";

// const Category = ({categories}) => {
//   const navigate = useNavigate();
//   return (
//     <div className="shop-by-category">
//       <div className="categories">
//         {categories?.data?.map((item) => (
//           <div
//             key={item.id}
//             className="category"
//             onClick={() => navigate(`/category/${item.id}`)}
//           >
//             <img
//               src={
//                 process.env.REACT_APP_DEV_URL +
//                 item.attributes.img.data.attributes.url
//               }
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;

import { useParams } from "react-router-dom"
import "./Category.scss";
import Products from "../Products/Products"
import useFetch from "../../hooks/useFetch";
const Category = () => {
  
const {id} = useParams();

const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)

    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                Category Title
            </div>
            <Products innerPage={true} products={data
            }/>
        </div>
    </div>
};

export default Category;