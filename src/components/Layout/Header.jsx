import React, { useState } from "react";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  // const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  // const [openWishlist, setOpenWishlist] = useState(false);
  // const [open, setOpen] = useState(false);
  // const { isSeller } = useSelector((state) => state.seller);
  // const { wishlist } = useSelector((state) => state.wishlist);
  // const { cart } = useSelector((state) => state.cart);
  // const { allProducts } = useSelector((state) => state.products);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchData(filteredProducts);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between mt-8">
          <div className="pt-14 pb-10">
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/Assets/images/logo.png`}
                alt="Logo"
                style={{ width: "100px", height: "70 px" }}
              />
            </Link>
          </div>
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#82c2ea] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer" // Updated cursor value
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;

                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${Product_name}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          {/* <div className={`${styles.button}`}>
            <Link to="/seller">
                <h1 className="text-[#fff] flex items-center">
                    Become Seller
                </h1>
            </Link>
          </div> */}
          <div className="w-[200px] bg-teal-600 h-[50px] my-3 flex items-center justify-center rounded-md cursor-pointer'">
            <div className="relative">
              <div
                className="text-[#fff] flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                Become Seller/Manufacture
              </div>
              {isDropdownOpen && (
                <div className=" z-20 absolute right-0 mt-2 bg-white shadow-md p-2">
                  <Link to="/seller" className=" w-[200px] cursor-pointer">
                    Become Seller
                  </Link>
                  <Link
                    to="/manufacturer"
                    className="block w-[180px] cursor-pointer"
                  >
                    Become Manufacturer
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#F79489] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          <div className={`${styles.normalFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          {/* correct   till here  */}

          <div className="flex">
            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                // onClick={() => setOpenWishlist(true)}
              >
               <div div className="z-10">
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                </div>
                <span className="absolute right-0 top-0 rounded-full bg-[#f0533efb] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {/* {wishlist && wishlist.length} */}
                  0
                </span>
                
              </div>
            </div>

            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
              <div div className="z-10">
                <AiOutlineShoppingCart size={30} color="rgb(255 255 255 / 83%)" />
                </div>
                <span className="absolute right-0 top-0 rounded-full bg-[#f0533efb] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {/* {wishlist && wishlist.length} */}
                  1
                </span>
              </div>
            </div>

            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                // onClick={() => setOpenWishlist(true)}
              >
              {/* {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )} */}
                <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
              </div>
            </div>





            {/* 
            <div className={`${styles.normalFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>
            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>}
            {/* cart popup */}
            {/* {openCart ? <Cart setOpenCart={setOpenCart} /> : null} */}
            {/* wishlist popup
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div> */}




          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
