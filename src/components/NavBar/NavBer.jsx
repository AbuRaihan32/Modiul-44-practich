import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Nav from '../Nav/Nav';
import { useState } from "react";
const NavBer = () => {
    const [open, setOpen] = useState(true)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "*", name: "Not Found" }
    ];

    return (
        <>
            <div onClick={() => { setOpen(!open) }} 
            className=" p-5 text-3xl md:hidden bg-violet-800 text-white">
                {
                    open ?
                        <IoMenu></IoMenu>
                        : <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
                }
            </div>
            <ul 
            className={`md:flex  md:gap-14 absolute  ${!open ? '' : '-top-60'} md:static md:justify-center px-5 bg-violet-800 text-white ml-4 md:ml-0 py-3`}>
            {
                routes.map(route => <Nav key={route.id} route={route}></Nav>)
            }
        </ul >
        </>
    );
};

export default NavBer;