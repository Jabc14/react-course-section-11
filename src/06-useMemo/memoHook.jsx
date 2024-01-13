import { useMemo,useState } from "react";
import { useCounter } from '../hooks/useCounter'



const heavyProcess = ( numbers = 100 ) => {

    for (let i = 0; i < numbers; i++) {
        console.log("números ", numbers)

        
    }

    return `${numbers}`
}

export const Memorize = () => {
const { counter, sumar } = useCounter( 10 );
const [ show, setShow ] = useState(true);


const memoValue = useMemo( () => heavyProcess( counter ), [ counter ] );

return (

    <>  
    
    <h1>Counter: { counter }</h1>

    <h4>Iteraciones { memoValue }</h4>
    <button className="btn btn-primary mt-2"
    onClick={ () => sumar() }
    >+1</button>  

    <button className="btn" onClick={() => setShow(!show)}>Muestra {JSON.stringify(show)}</button>  
    </>
)


}