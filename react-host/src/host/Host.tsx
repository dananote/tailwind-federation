import Button from "./Button";
import "../App.css";
import {useState} from "react";

function Home() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
        console.log(open)
    }
  return (
    <>
      <h1>Host Application</h1>

      <div className="card">
        <Button />
      </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="tw:btn" onClick={handleClick}>open modal</button>
        <dialog className="tw:modal" open={open}>
            <div className="tw:modal-box w-11/12 max-w-5xl">
                <h3 className="tw:font-bold tw:text-lg">Hello!</h3>
                <p className="py-4">Click the button below to close</p>
                <div className="tw:modal-action">
                    <form method="dialog">
                        {/* if there is a button, it will close the modal */}
                        <button className="tw:btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </>
  );
}

export default Home;
