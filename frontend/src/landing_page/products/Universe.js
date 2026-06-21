import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="col-4 p-3 mt-5">
                    <img src="media/zerodhaFundhouse.png" style={{ width: "60%" }} />
                    <p className=" text-muted mt-3" style={{ fontSize: ".80rem" }}>Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/sensibull-logo.svg" style={{ width: "60%" }} />
                    <p className=" text-muted mt-3" style={{ fontSize: ".80rem" }}>Options trading platform that lets you<br/>
                        create strategies, analyze positions, and examine<br/>
                        data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/tijori.svg" style={{ width: "50%" }} />
                    <p className=" text-muted " style={{ fontSize: ".80rem" }}>Investment research platform<br />
                        that offers detailed insights on stocks,<br />
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/streakLogo.png" style={{ width: "50%" }} />
                    <p className=" text-muted mt-3" style={{ fontSize: ".80rem" }}>Systematic trading platform<br/>
                        that allows you to create and backtest<br/>
                        strategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/smallcaseLogo.png" />
                    <p className=" text-muted mt-3" style={{ fontSize: ".80rem" }}>Thematic investing platform<br/>
                        that helps you invest in diversified<br/>
                        baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/dittoLogo.png" style={{ width: "30%" }} />
                    <p className=" text-muted mt-3" style={{ fontSize: ".80rem" }}>Personalized advice on life<br/>
                        and health insurance. No spam<br/>
                        and no mis-selling.
                        Sign up for free</p>
                </div>
                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Signup for free
                </button>
            </div>
        </div>
    );
}

export default Universe;