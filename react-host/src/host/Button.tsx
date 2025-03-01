import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function Button() {
  const buttonColor = "boot-factory-text-red-600 boot-factory-text-sky-400";

  return (
    <Link className={buttonColor} to="/remote">
      go to remote
    </Link>
  );
}

export default Button;
