import React from 'react'
import "./Sage_landing.css"
import saga from "../Assets/saga.png"

export default function Sage_landing() {
  return (
    <div className='saga_landong_main'>
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <div className="content_saga_right">
                    <h1>Shiba Saga</h1>
                    <h2>Where Meme meets Utility</h2>
                    <h6>A New Era Of Blockchain Powered Gaming.</h6>

                    <div className="countdown py-5 d-flex gap-4">
                    <div className="box text-center">
                        
                        <div className="days">
                            00
                        </div>
                        <span className='coutn_lebal'>Days</span>
                    </div>
                    <div className="box text-center">
                        
                        <div className="days">
                            00
                        </div>
                        <span className='coutn_lebal'>HOURS</span>
                    </div>
                    <div className="box text-center">
                        
                        <div className="days">
                            00
                        </div>
                        <span className='coutn_lebal'>MINUTES</span>
                    </div>
                    <div className="box text-center">
                        
                        <div className="days">
                            00
                        </div>
                        <span className='coutn_lebal'>SECONDS</span>
                    </div>
                    </div>

                    <span className='addres'>CA: 0x43d7e65b8ff49698d9550a7f315c87e67344fb59</span>
                  <br />  <span className='addres'>info@shibasaga.com</span>


                  <div className="right_content-btn py-3     d-flex gap-4">
                    <button className='right_btn' >Dextools</button>
                    <button className='right_btn with_bg' >Buy $SHIA</button>
                  </div>
                </div>
            </div>

            <div className="col-md-5">
                <img src={saga} className='img_float' alt="" />
            </div>
        </div>
    </div>
    
    </div>
  )
}
