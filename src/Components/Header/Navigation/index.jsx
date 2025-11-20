import Button from "@mui/material/Button";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io"; 
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router";

const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
    return(
        <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 navPart1">
                            <div className="cartWrapper">
                                <Button className="allCartTab align-items-center" 
                                onClick={() => {
                                setisopenSidebarVal(!isopenSidebarVal)}}>
                                <span className="menu me-3"> <IoIosMenu/></span>
                                <span className="text">ALL CATEGORIES</span>
                                <span className="down ms-3"><TfiAngleDown/></span>
                            </Button>
                            <div className={`sideNavbar ${isopenSidebarVal===true ? "open":""}`}>
                                    <ul>
                                        <li><Link to="/"><Button>men</Button></Link></li>
                                        <li><Link to="/"><Button>women</Button></Link></li>
                                        <li><Link to="/"><Button>beauty</Button></Link></li>
                                        <li><Link to="/"><Button>watches</Button></Link></li>
                                        <li><Link to="/"><Button>kids</Button></Link></li>
                                        <li><Link to="/"><Button>gift</Button></Link></li>
                                        <li><Link to="/"><Button>men</Button></Link></li>
                                        <li><Link to="/"><Button>women</Button></Link></li>
                                        <li><Link to="/"><Button>beauty</Button></Link></li>
                                        <li><Link to="/"><Button>watches</Button></Link></li>
                                        <li><Link to="/"><Button>kids</Button></Link></li>
                                        <li><Link to="/"><Button>gift</Button></Link></li>
                                    </ul>
                            </div>
                            </div>
                        </div>
                         <div className="col-sm-10 navPart2 d-flex align-items-center">
                            <ul className="list list-inline ms-auto">
                                <li className="list-inline-item "><Link to={"/"}>
                                <Button>Home</Button></Link></li>
                                <li className="list-inline-item "><Link to="/">
                                <Button>Men</Button>
                                  <div className="submenu shadow">
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                    </div>
                                </Link></li>
                                <li className="list-inline-item "><Link to="/">
                                <Button>Women</Button>
                                <div className="submenu shadow">
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                        <Link to="/"><Button>clothing</Button></Link>
                                        <Link to="/"><Button>footwear</Button></Link>
                                        <Link to="/"><Button>watches</Button></Link>
                                    </div>
                                </Link></li>
                                <li className="list-inline-item "><Link to="/">
                                <Button>Watches</Button></Link></li>
                                <li className="list-inline-item "><Link to="/">
                                <Button>Kid</Button></Link></li>
                                <li className="list-inline-item "><Link to="/">
                                <Button>Gift</Button></Link></li>
                                <li className="list-inline-item "><Link to="/">
                                <Button>Blog</Button></Link></li>
                                <li className="list-inline-item "><Link to="/">
                                <Button>Contact</Button></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navigation;