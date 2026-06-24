import React from 'react';

function Awards() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6 p-5 text-center">
                    <img src="/Media/largestBroker.svg" alt="Largest broker" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 p-5 mt-3" >
                    <h1>Largest Stock Broker in India</h1>
                    <p className="mb-5">2+ million Zerodha client contribute to over 15% of all retail order
                        Volume in India daily by trading and investing in :</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Future and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">    <ul>
                            <li>
                                <p>Stocks & IPOS</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds & Govt.Securities</p>
                            </li>
                        </ul></div>
                    </div>

                    <img src="Media/PressLogos.png" style={{ width: "80%" }} />
                </div>

            </div>
        </div>


    );
}

export default Awards;