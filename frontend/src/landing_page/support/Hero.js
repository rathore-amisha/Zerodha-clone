import React from 'react';

function Hero() {
    return (
       <section className="container-fluid" id='supportHero'>
        
        <div className='p-3 mt-5 ' id='supportwrapper'>
            <h4>Support Page</h4>
           <a href=''>Track ticket</a>
        </div>
        <div className='row p-5 m-5'>
            <div className='col-6 p-5 '>
                <h3 className='mb-3'>Search for an answer or browse help topics to create a ticket</h3>
                <input placeholder='Eg:how do i activate F&O,why is my order getting rejected..'/><br/>
                <div id="link">
                <a href='' >  Track account</a> 
                <a href='' >  opening Track segment activation</a> 
                <a href='' >  Intraday margins</a><br/>
                <a href='' >Kite user manual</a>
                </div>
            </div>
            <div className='col-6 p-5'>
                <h3>Featured</h3>
                <ol>
                    <li className='mb-3'><a href=''>1.Surveillance measure on scrips - June 2025</a></li>
                    <li><a href=''>2.Latest Intraday leverages and Square-off timings</a></li>
                </ol>
            
            </div>
        </div>
        
       </section>
    );
}

export default Hero;
