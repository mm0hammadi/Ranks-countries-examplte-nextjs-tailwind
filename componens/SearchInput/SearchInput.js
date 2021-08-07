import SearchRounded from "@material-ui/icons/SearchRounded";
import Styles from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className="style.wrapper">
      <SearchRounded />
      <input className="styles.input" {...rest} />
    </div>
  );
};

export default SearchInput;
