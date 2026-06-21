import React from 'react';

function CreateTicket() {
    return (
        <div className="container">
            <div className="row mt-5 ">
                <h6 className="fs-4 text-muted " style={{ padding: "100px,20px", fontSize: "16px" }}>
                    To create a ticket, select a relevant topic</h6>

                <div className="col-4 p-5 mt-5 ">
                    <h4 className="fs-5  mb-3" style={{ padding: "100px,20px", fontSize: "16px" }}>
                        <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
                        <p><a href='#' style={{textDecoration:"none", lineHeight:"2.0"}}>Resident individual</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Minor</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Non Resident Indian (NRI)</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Company, Partnership, HUF and LLP</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Glossary</a></p>
                        
                </div>
                <div className="col-4 p-5 mt-5 ">
                    <h4 className="fs-5 " style={{ padding: "100px,20px", fontSize: "16px" }}>
                        <i class="fa-solid fa-circle-user"></i>  Your Zerodha Account</h4>
                        <p><a href='#' style={{textDecoration:"none", lineHeight:"2.0"}}>Your Profile</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Account modification</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Client Master Report (CMR) and Depository Participant (DP)</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Nomination</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Transfer and conversion of securities</a></p>
                </div>
                <div className="col-4 p-5 mt-5  ">
                    <h4 className="fs-5 " style={{ padding: "100px,20px", fontSize: "16px" }}>
                       <i class="fa fa-signal" aria-hidden="true"></i> Kite</h4>
                        <p><a href='#' style={{textDecoration:"none", lineHeight:"2.0"}}>IPO</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Trading FAQs</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Margin Trading Facility (MTF) and Margins</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Charts and orders</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Alerts and Nudges</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>General</a></p>
                </div>
            </div>


            <div className="row ">
                <div className="col p-5  mb-5">
                    <h4 className="fs-5 " style={{ padding: "100px,20px", fontSize: "16px" }}>
                        <i class="fa-regular fa-folder"></i>  Funds</h4>

                        <p><a href='#' style={{textDecoration:"none", lineHeight:"2.0"}}>Add money</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Withdraw money</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Add bank accounts</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>eMandates</a></p>
                        </div>
                <div className="col p-5 mb-5">
                    <h4 className="fs-5 " style={{ padding: "100px,20px", fontSize: "16px" }}>
                        <i class="fa-regular fa-circle-user"></i>  Console</h4>
                         <p><a href='#' style={{textDecoration:"none", lineHeight:"2.0"}}>Portfolio</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Corporate actions</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Funds statement</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Reports</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Profile</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Segments</a></p>
                </div>

                <div className="col p-5 mb-5">
                    <h4 className="fs-5 " style={{ padding: "100px,20px", fontSize: "16px" }}>
                        <i class="fa-solid fa-circle-notch"></i> Coin</h4>
                         <p><a href='#' style={{textDecoration:"none", lineHeight:"2.0"}}>Mutual funds</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>National Pension Scheme (NPS)</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Features on Coin</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>Payments and Orders</a></p>
                        <p><a href='#' style={{textDecoration:"none",lineHeight:"2.0"}}>General</a></p>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
