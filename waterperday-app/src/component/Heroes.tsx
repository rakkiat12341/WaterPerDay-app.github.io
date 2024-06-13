import './Heroes.css'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import React from 'react';
import { useState } from 'react';
import { CiGlass } from "react-icons/ci";

interface HeroesProps  {
    theme: string
    setTheme:React.Dispatch<React.SetStateAction<string>>;
}

 function Heroes({theme,setTheme}:HeroesProps) {

    //function สำหรับ Formatnumber with commas 
    function numberWithCommas(x:number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // function สำหรับ เปลี่ยน theme
    function editTheme(){
        if(theme === "light"){
            setTheme("dark")
        }else if(theme === "dark"){
            setTheme("light")
        }
        
    }

    
    
    const [resultWaterPerDay,setResultWaterPerDay] = useState<number>(0)
    const [cup,setCupt] = useState<number>(0)
    // function สำหรับ คำนวนน้ำต่อวัน
    function calculateWaterPerDay (event:React.ChangeEvent<HTMLInputElement>)  {
        const weight = parseInt(event.target.value)
        const result = weight*2.2*30/2        
        setResultWaterPerDay(+result.toFixed(0))
        setCupt((+result.toFixed(0)/250))
        console.log(resultWaterPerDay);
        
    }

    return (
        <div className={"heroes-container "+theme} >
            <h1>ควรดื่มน้ำวันละเท่าใหร่?</h1>
            {/* <h1> {resultWaterPerDay}มล.</h1> */}
            <h1> {isNaN(resultWaterPerDay) ? 0 : numberWithCommas(resultWaterPerDay)} มล.</h1>
            <h1>{isNaN(cup) ? 0 : cup} <CiGlass/></h1>
            <input type="number" placeholder="กรอกน้ำหนักของคุณ" onChange={(e)=>calculateWaterPerDay(e)}/>
            <div className={"theme-container "+theme} onClick={editTheme}>
                <span>{theme === "light"? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
                <span className="icon">{theme === "light" ? <FaSun/> : <FaMoon/>}</span>
            </div>
        </div>
    )
 }

 export default Heroes