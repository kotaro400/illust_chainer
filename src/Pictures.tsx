import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";

const Pictures = () => {
  return (
    <div>
      <MainHeader />
      <Link to="/new">絵を追加する</Link>
    </div>
  );
};

export default Pictures;