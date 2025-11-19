import { Link } from "react-router";
import Logo from "../../assets/images/logo1.jpg" 
import CountryDropdown from "../CountryDropdown";
//import { IoSearchSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegUser } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";

const Header = () =>{

    const context = useContext(MyContext)
    return(
        
        <>
        <div className="headerWrapper">
            <div className="top-strip bg-green">
                <div className="container" >
                    <p className="mb-0 mt-0 text-center">"Treat yourself!"</p>
                </div>
            </div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                          <Link to={'/'} ><img src={Logo} alt="Logo"/></Link>
                        </div>

                        <div className="col-sm-10 d-flex align-items-center part2">

                            {
                            context.countryList !== 0 &&   <CountryDropdown/>
                            } 
                          
                            <SearchBox/>

                            <div className="part3 d-flex align-items-center me-3" >
                                <Button className="circle me-3"><FaRegUser/></Button>
                                <div className="ms-auto cartTab d-flex align-items-center" >
                                    <span className="price">$4.13</span>
                                     <div className="position-relative ms-3" >
                                        <Button className="circle"><IoBagHandleOutline/></Button>
                                        <span className="count d-flex align-items-center 
                                        justify-content-center"> 1 </span>
                                     </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <Navigation/>
        </div>
        </>
    )
}

export default Header;