import Button from "@mui/material/Button";
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div
      className="headerSearch me-3 ms-3">
      <input type="text" placeholder="Search for Products" />
      <Button>
        <IoSearchSharp />
      </Button>
    </div>
  );
};

export default SearchBox;
