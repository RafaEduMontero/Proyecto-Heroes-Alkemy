import { useEffect, useState } from "react"
import heroeDB from "../api/heroeDB";

export default id =>{
    const [results,setResults] = useState([]);
    const [validate,setValidate] = useState(false);
    console.log(id)

    useEffect(() => {
        const Heroe = async() =>{
            try {
                const heroe = await heroeDB.get(`/${id}`);
                console.log(heroe)
                if (heroe.data.response === 'success') {
                    setResults(heroe);
                    setValidate(true)
                }
            } catch (error) {
                setValidate(false);
            }
        }
        Heroe();
    }, [id]);
    return [results,validate];
}