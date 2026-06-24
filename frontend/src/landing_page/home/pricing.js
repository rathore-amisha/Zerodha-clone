import React from 'react';

function Pricing() {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-12 col-md-5'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.</p>
                    <a href='#' style={{ textDecoration: "none" }}>See pricing  <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-12 col-md-7 mt-3'>
                    <div className='row'>
                        <div className='col-12 col-sm-4 text-center mb-3'>
                            <img src="/Media/pricing0.svg" alt="Free account opening" style={{ width: "40%" }} />
                            <p className='text-muted mt-2' style={{ fontSize: "0.75rem" }}>Free account<br></br>opening</p>
                        </div>
                        <div className='col-12 col-sm-4 text-center mb-3'>
                            <img src="/Media/pricing0.svg" alt="Free equity delivery" style={{ width: "40%" }} />
                            <p className='text-muted mt-2' style={{ fontSize: "0.75rem" }}>Free equity delivery<br></br>and direct mutual fund</p>
                        </div>
                        <div className='col-12 col-sm-4 text-center mb-3'>
                            <img src="/Media/intradayTrades.svg" alt="Intraday and F&O" style={{ width: "40%" }} />
                            <p className='text-muted mt-2' style={{ fontSize: "0.75rem" }}>Intraday and<br></br>F&O</p>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );


}

export default Pricing;
