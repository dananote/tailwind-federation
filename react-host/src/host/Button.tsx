import { Link } from "react-router-dom";
import {twMerge} from "tailwind-merge";

function Button() {
    // TODO twMerge를 사용하지 않으면 sky-400이 적용됩니다.
  const buttonColor = twMerge("tw:text-sky-400", "tw:text-red-600");

  return (
    <Link className={buttonColor} to="/remote">
      go to remote
    </Link>


  );
}

export default Button;
