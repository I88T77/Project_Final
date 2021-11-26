import React from 'react';
import './laptop.css';
export const Laptop=()=>{
    return(
        <div>
          <div className="cartlaptop1">
          <div className="show_cart"><h3>HP 15 Ryzen 3</h3>
            <img className = "image" src="./images/laptop/ASUS VivoBook 15.jpg" alt="not loaded" />
            <h3>M.R.P&nbsp;₹49999</h3>
            <p>Processor: AMD Ryzen 3 3250U (2.6 GHz base clock, up to 3.5 GHz max boost clock, 4 MB L3 cache, 2 cores).<br />
              <br />
            </p>
            <p className="cart1">
              <a className="unactive" href="HP 15 Ryzen 3.html"><i className="fa fa-plus-square" style={{fontSize: '40px', color: 'blue'}} /></a>
              <a className="unactive" href="HP 15 Ryzen 3.html"><i className="fa fa-cart-plus" style={{fontSize: '40px', color: 'blue'}} /></a></p>
          </div>
          <div className="show_cart"><h3>Dell Inspiron 3502</h3>
            <img className = "image" src="./images/laptop/ASUS VivoBook Ultra K15.jpg" alt="not loaded" />
            <h3>M.R.P&nbsp;₹45999</h3>
            <p>Processor: Intel Pentium Silver N5030 Processor (4MB Cache, up to 3.1 GHz), Memory &amp; Storage:4GB RAM | 256GB M.2 PCIe NVMe Solid State Drive<br />
            </p>
            <p className="cart1">
              <a className="unactive" href="Dell Inspiron 3502.html"><i className="fa fa-plus-square" style={{fontSize: '40px', color: 'blue'}} /></a>
              <a className="unactive" href="Dell Inspiron 3502.html"><i className="fa fa-cart-plus" style={{fontSize: '40px', color: 'blue'}} /></a></p>
          </div>
          <div className="show_cart"><h3>ASUS VivoBook 15</h3>
            <img className = "image" src="./images/laptop/ASUS ZenBook 14e.jpg" alt="not loaded" />
            <h3>M.R.P&nbsp;₹48999</h3>
            <p>Processor: Intel Celeron N4020 Processor, 1.1 GHz Base Speed, Up to 2.8 GHz Max Boost Turbo Speed , 2 cores, 2 Threads, 4MB Cache<br />
            </p>
            <p className="cart1">
              <a className="unactive" href="ASUS VivoBook 15.html"><i className="fa fa-plus-square" style={{fontSize: '40px', color: 'blue'}} /></a>
              <a className="unactive" href="ASUS VivoBook 15.html"><i className="fa fa-cart-plus" style={{fontSize: '40px', color: 'blue'}} /></a></p>
          </div>
        </div>
      </div>
    
    )
}

export const Mobile=()=>{
    return(
      <div>
        <div className="cartlaptop1">
        <div className="show_cart"><h3>Samsung M 12 </h3>
          <img src="M 12.jpg" alt="not loaded" /><br /><br />
          <h3>M.R.P&nbsp;₹14999</h3>
          <p>(Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate
          </p>
          <p>
            <a className="unactive" href="Samsung M 12.html"><i className="fa fa-plus-square" style={{fontSize: '40px', color: 'blue'}} /></a>
            <a className="unactive" href="Samsung M 12.html"><i className="fa fa-cart-plus" style={{fontSize: '40px', color: 'blue'}} /></a></p>
        </div>
        <div className="show_cart"><h3>Samsung M 32 5G</h3>
          <img src="M 32 5G.jpg" alt="not loaded" /><br />
          <h3>M.R.P&nbsp;₹18999</h3>
          <p>
            MediaTek | Dimensity 720 Octa Core 2GHz Processor with the widest 12 band support for a True 5G experience
          </p>
          <p>
            <a className="unactive" href="Samsung M 32 5G.html"><i className="fa fa-plus-square" style={{fontSize: '40px', color: 'blue'}} /></a>
            <a className="unactive" href="Samsung M 32 5G.html"><i className="fa fa-cart-plus" style={{fontSize: '40px', color: 'blue'}} /></a></p>
        </div>
        <div className="show_cart"><h3>Samsung M 52 5G</h3>
          <img src="M 52 5G.jpg" alt="not loaded" /><br /><br />
          <h3>M.R.P&nbsp;₹21999</h3>
          <p> (Blazing Black, 6GB RAM, 128GB Storage) Latest Snapdragon 778G 5G | sAMOLED 120Hz Display |8 gb ram.
          </p>
          <p>
            <a className="unactive" href="Samsung M 52 5G.html"><i className="fa fa-plus-square" style={{fontSize: '40px', color: 'blue'}} /></a>
            <a className="unactive" href="Samsung M 52 5G.html"><i className="fa fa-cart-plus" style={{fontSize: '40px', color: 'blue'}} /></a></p>
        </div>
      </div>
      
    </div>
    )
}
