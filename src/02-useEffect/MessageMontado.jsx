import { useEffect, useState } from "react";



export const Message = () => {

  const [mouse, setMouse ] = useState({ 
    x: 0,
    y: 0
  });

  const move = ({x, y}) => {
      setMouse({x, y})
  }

  useEffect(() => {
    
    //({x,y}) => move({x,y}) es igual a escribir 'move'
    console.log('Se montó')
    window.addEventListener( 'mousemove', ({x,y}) => move({x,y}) )

    return () => {
      console.log('Se desmontó')
      window.removeEventListener( 'mousemove', move)
    };
  }, []);

  return (
    <>
      <h2>Usuario ya existe</h2>

    {/* {JSON.stringify(mouse)} */}

    </>
  );
};
