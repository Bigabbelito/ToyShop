import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import HeaderAdmin from "../Admin/HeaderAdmin";
import { logdin } from "../utils/getAtom";
import { useRecoilState } from "recoil";



const Root = () => {
    const [islogdin] = useRecoilState(logdin)

    return (
        <>
        {islogdin ? 
            <HeaderAdmin/>:
           <Header/>
        }
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Root;