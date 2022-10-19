//importing useState hook to use it
import { useState } from "react";
//importing icons
import { BsFillMoonFill, BsSun } from "react-icons/bs";



const Counter = () => {
  
	
  //useState ka variable for counter
  const [num, setNum] = useState(0);
 
  //useState ka Variable for theme mode dark ya light
  const [themeMode, setThemeMode] = useState(true);

  //function to enable dark mode
  const toggleMode = () => setThemeMode(!themeMode);

  return (
    <div className={themeMode ? "dark" : "light"}>



      <button onClick={toggleMode}>Mode {themeMode ? "dark" : "light"} </button>


    <p>   {themeMode ? <BsFillMoonFill/> : <BsSun/>} </p>
   
      <br /><br /><br /><br /><br /><br />

	  <h1>Counter App</h1>

      <button onClick={() => { setNum(num - 1)}}> Minus </button>

      <span>{num}</span>

      <button onClick={() => { setNum(num + 1)}}> Plus </button>

    </div>
  );
};
export default Counter;