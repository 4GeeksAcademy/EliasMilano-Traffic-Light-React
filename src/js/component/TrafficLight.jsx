import React, {useState} from "react";

const TrafficLight = () => {

    const [colorSelected, setColorSelected] = useState("red");

    const [ colorList, setColorList ] = useState(['red', 'yellow', 'green']);

    return (
        <div className="bg-info d-flex flex-column justify-content-center align-items-center min-vh-100"
            style={{width:"1600px"}}
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
            <div className="m-4 p-3 d-flex justify-content-between bg-transparent my-0 p-0"
                style={{width:"1200px", height:"40px"}}>
                    <div className="bg-white rounded-pill my-0" style={{width:"40px", height:"35px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"100px", height:"35px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"60px", height:"30px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"40px", height:"35px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"40px", height:"35px"}}></div>
            </div>
            <div className="m-3 p-2 d-flex justify-content-between bg-transparent my-0 p-0"
                style={{width:"1200px", height:"40px"}}>
                    <div className="bg-white rounded-pill my-0" style={{width:"70px", height:"35px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"70px", height:"35px"}}></div>
                    <div className="bg-transparent rounded-pill my-0" style={{width:"60px", height:"30px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"90px", height:"35px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"80px", height:"35px"}}></div>
            </div>
           
            <div className="d-flex justify-content-between bg-transparent my-0 p-0"
                style={{width:"1200px", height:"15px"}}>
                    <div className="bg-white rounded-pill my-0" style={{width:"70px", height:"0px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"40px", height:"25px"}}></div>
                    <div className="bg-transparent rounded-pill my-0" style={{width:"0px", height:"15px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"60px", height:"25px"}}></div>
                    <div className="bg-white rounded-pill my-0" style={{width:"60px", height:"15px"}}></div>
            </div>


            {/* Traffic Light */}
            <div className="mt-4 bg-dark" style={{width:"20px", height:"70px"}}>
            </div>            
            <div className="p-2 bg-dark rounded d-flex flex-column justify-content-center align-items-center" 
                style={{width:"100px"}}>
                {
                    colorList.map( (color, indexColor ) => {
                        return (                         
                            <div key={indexColor} onClick={()=>{
                                    setColorSelected(color)
                                }}
                                className={"m-1 rounded-circle d-flex justify-content-center align-items-center" + (colorSelected == color ? "yellowLight" : "" )}
                                style={{width:"60px", height:"60px", backgroundColor: color}}
                            >{(color == "purple" ? <h2>👽</h2> : "" )}
                            </div>
                        )
                    })
                }
            </div>
            <button className="btn btn-dark text-warning mt-3" onClick={() => {
            if ( colorList.length < 4) {
                setColorList([ ...colorList, "purple" ])
                }
            }}>
                Aliens pulsar aquí🖖
            </button>

        </div>

    );
}

export default TrafficLight;