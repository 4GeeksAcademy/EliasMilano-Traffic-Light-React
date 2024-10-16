import React, {useState} from "react";

const TrafficLight = () => {

    const [color, setColor] = useState("red");

    return (
        <div className="bg-info d-flex flex-column justify-content-center align-items-center min-vh-100"
            style={{width:"1400px"}}
        >
            {/* Navbar */}
            <nav className="navbar fixed-top bg-body-white d-flex justify-content-center bg-opacity-75">
                <div className="d-flex justify-content-center">
                    <div className="m-3 p-2 bg-white bg-opacity-75 rounded text-black">
                        <h2>Awesome Traffic Light🚦</h2>
                    </div>      

                </div>
            </nav>

            {/* Clouds */}
            <div className="m-3 p-2 d-flex justify-content-between bg-transparent my-0 p-0"
                style={{width:"1000px", height:"40px"}}>
                    <div className="bg-white rounded-pill my-0" style={{width:"40px", height:"35px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"100px", height:"35px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"60px", height:"30px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"40px", height:"35px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"40px", height:"30px"}}></div>
            </div>
            <div className="d-flex justify-content-between bg-transparent my-0 p-0"
                style={{width:"1000px", height:"40px"}}>
                    <div className="bg-white rounded-pill my-0" style={{width:"70px", height:"35px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"70px", height:"35px"}}></div>
                    <div className="bg-transparent rounded-pill my-0" style={{width:"60px", height:"30px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"90px", height:"35px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"80px", height:"30px"}}></div>
            </div>
           
            {/* Traffic Light */}
            <div className="mt-4 bg-dark" style={{width:"20px", height:"70px"}}>
            </div>            
            <div className="p-2 bg-dark rounded d-flex flex-column justify-content-center align-items-center" 
                style={{width:"100px"}}>
                    <div onClick={() => {setColor("red")}} className={"m-1 bg-danger rounded-circle " + (color == "red" ? "yellowLight" : "") } style={{width:"60px", height:"60px"}}></div>
                    <div onClick={() => {setColor("yellow")}} className={"m-1 bg-warning rounded-circle " + (color == "yellow" ? "yellowLight" : "") } style={{width:"60px", height:"60px"}}></div>
                    <div onClick={() => {setColor("green")}} className={"m-1 bg-success rounded-circle " + (color == "green" ? "yellowLight" : "") } style={{width:"60px", height:"60px"}}></div>

            </div>
        </div>

    );
}

export default TrafficLight;