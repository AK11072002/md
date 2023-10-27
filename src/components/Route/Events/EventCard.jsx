import React from "react";
import styles from "../../../styles/styles";
import CountDown from "./CountDown.jsx";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const EventCard = ({ active, data }) => {
//   const { cart } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const addToCartHandler = (data) => {
//     const isItemExists = cart && cart.find((i) => i._id === data._id);
//     if (isItemExists) {
//       toast.error("Item already in cart!");
//     } else {
//       if (data.stock < 1) {
//         toast.error("Product stock limited!");
//       } else {
//         const cartData = { ...data, qty: 1 };
//         // dispatch(addTocart(cartData));
//         toast.success("Item added to cart successfully!");
//       }
//     }
//   }





  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        {/* <img src={`${data.images[0]?.url}`} alt="" /> */}
        <img src=" https://i.pinimg.com/236x/85/d8/40/85d8405f758250a8d5ebf5d7bd98671d.jpg" height="400px" width="500px"/>
      </div>


      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
        {/* {data.name} */}
        iphone 15 pro max
        </h2>

        
        {/* <p>{data.description}</p> */}
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque
exercitationem labore vel, dolore quidem asperiores, laudantium temporibus soluta optio consequatur
aliquam deserunt officia. Dolorum saepe nulla provident Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque
exercitationem labore vel, dolore quidem asperiores, laudantium temporibus soluta optio consequatur
aliquam deserunt officia. Dolorum saepe nulla providentLorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, assumenda? Quisquam itaque
exercitationem labore vel, dolore quidem asperiores, laudantium temporibus soluta optio consequatur
aliquam deserunt officia. Dolorum saepe nulla provident.</p>
        
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">

              {/* {data.originalPrice}$ */}
              10565 ₹

            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">

              {/* {data.discountPrice}$ */}

                1055 ₹

            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">

            {/* {data.sold_out} sold */}
            50 sold

          </span>
        </div>
        <CountDown data={data} />
        <br />
{/* 
         <div className="flex items-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div>
        </div>  */}

      </div>
    </div>
  );
};

export default EventCard;
