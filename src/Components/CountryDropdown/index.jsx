import { Dialog } from "@mui/material";
import Button from "@mui/material/Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";



const CountryDropdown = () => {

  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab,setselectedTab] = useState(null);

  const [countryList, setCountryList] =useState([]);

  const context = useContext(MyContext);

  const selectCountry=(index,country)=>{
    setselectedTab(index);
    setisOpenModal(false);
    context.setselectedCountry(country)
  }

  useEffect(() =>{
      setCountryList(context.countryList);
  },[])

 const filterList = (e) =>{
  const keyword = e.target.value.toLowerCase();

  if(keyword !== ""){
      const list = context.countryList.filter((item) =>{
    return item.country.toLowerCase().includes(keyword);
  });

  setCountryList(list);
  }else{
     setCountryList(context.countryList);
  }


 }
  return (
    <>
      <Button className="countryDrop" onClick={()=>setisOpenModal(true)}>
        <div classname="info d-flex flex-column">
          <span className="label">Your Location </span>
          <span className="name"> {context.selectedCountry !== "" ?
           context.selectedCountry.length>10?
          context.selectedCountry?.substr(0,10)+'...':context.selectedCountry
           : 'Select Location' }</span>
          <span className="ms-auto">
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
      </Button>

      <Dialog open={isOpenModal} className="locationModal" >
        <h4 className="mb-0">Choose Your Delivery Address</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={()=>setisOpenModal(false)}><MdClose/></Button>

        <div className="headerSearch w-100" style={{ width: "100%"}} >
          <input type="text" placeholder="Search your area" onChange={filterList}/>
          <Button style={{right: "290px", top: "25px",}}>
            <IoSearchSharp />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {countryList?.length !== 0 && countryList?.map((item,index)=>{
              return(
                   <li key={index}><Button onClick={()=>selectCountry(index, item.country)}
                    className={`${selectedTab===index ? 'active': ''}`}>
                    {item.country}</Button></li>
              )
          })}
         
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
