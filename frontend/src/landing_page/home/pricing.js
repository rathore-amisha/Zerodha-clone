import React from 'react';

function Pricing() {
    return ( 
        <div className = 'container mb-5'>
         <div className = 'row'>
            <div className = 'col-5'>
                <h1 className = 'mb-3 fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. 
                    Flat fees and no hidden charges.</p>
            <a href='#' style = {{textDecoration:"none"}}>See pricing  <i class="fa-solid fa-arrow-right"></i></a> 
            </div>
            {/* <div className = 'col-2'></div> */}
            <div className = 'col-7'>
                <div className = 'row'>
                    <div className = 'col' style={{display:"inline-flex"}}>
                          <img src = "Media/pricing0.svg" style={{width:"50%"}} />
                            <p className ='text-muted  mb-15' style={{marginTop:"50px",fontSize:"0.75rem"}}>Free account<br></br>opening</p>
                    </div>
                     <div className = 'col' style={{display:"inline-flex"}}>
                          <img src = "Media/pricing0.svg" style={{width:"50%"}} />
                            <p className ='text-muted  mb-15' style={{marginTop:"30px",fontSize:"0.75rem"}}>Free equity delivery<br></br>and direct mutual fund</p>
                    </div>
                     <div className = 'col mb-5' style={{display:"inline-flex"}}>
                          <img src = "Media/intradayTrades.svg" style={{width:"50%"}} />
                            <p className ='text-muted  mb-15' style={{marginTop:"20px",fontSize:"0.75rem"}}>Intraday and<br></br>F&O</p>
                    </div>
                  
                    
                </div>
            </div>
            </div>   

        </div>
     );
                            
    
}

export default Pricing;
