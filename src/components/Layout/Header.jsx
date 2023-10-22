import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { productData } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData.filter((product) => 
      product.name.toLowerCase().includes(term.toLowerCase())
      );

    setSearchData(filteredProducts);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className={`${styles.section}`}>
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between mt-8">
        <div className="pt-9">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/Assets/images/logo.png`}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
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
                    const d=i.name;

                    const Product_name=d.replace(/\s+/g,"-");
                    return(
                        <Link to={`/product/${Product_name}`}>
                            <div className="w-full flex items-start-py-3">
                                <img src={i.image_Url[0].url} alt="" className="w-[40px] h-[40px] mr-[10px]"/>
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

        
        <div className="w-[200px] bg-blue-500 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer'">
          <div className="relative">
            <div
              className="text-[#fff] flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
             Become Seller/Manufacture
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-md p-2">
                <Link to="/seller" className=" w-[200px]">
                  Become Seller
                </Link>
                <Link to="/manufacturer" className="block w-[180px]">
                  Become Manufacturer
                </Link>
              </div>
            )}
          </div>
        </div>

        </div>
      </div>
  );
};

export default Header;

