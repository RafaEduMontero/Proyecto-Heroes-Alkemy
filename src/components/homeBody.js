import { useContext } from "react";
//Context
import { HomeContext } from "../context/homeContext";
//Components
import ToastHome from "./toastHome";

const HomeBody = () => {
    const {contadorBad,contadorGood} = useContext(HomeContext);
    return (
        <div className="d-flex justify-content-center justify-content-lg-end sticky-top">
            <div className="d-flex flex-lg-column">
                {contadorGood === 3 ? <ToastHome header="Héroes" body="No puedes agregar Héroes a tu Team :(" /> : null}
                {contadorBad === 3 ? <ToastHome header="Villanos" body="No puedes agregar Villanos a tu Team :(" /> : null}
            </div>
        </div>
    )
}

export default HomeBody
