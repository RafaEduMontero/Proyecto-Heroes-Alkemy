import { useEffect, useState } from "react"
import heroeDB from "../api/heroeDB";

export default () =>{
    const [results,setResults] = useState([]);
    const [validate,setValidate] = useState(false);

    useEffect(() =>{
        const manyData = async() =>{
            let promises = [];
            for(let i=1;i<=731;i++){
               const data = await fetch(`https://superheroapi.com/api/4393807120656369/${i}`);
                const heroe = await data.json();
               if(heroe){
                   promises.push(heroe)
               }
            }
            const data = await Promise.all(promises);
            console.log(data)
            setResults(data);
            setValidate(true);
        }

        manyData();
    },[]);

    console.log(results)

    return [results,validate];
}