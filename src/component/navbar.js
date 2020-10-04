function Navbar(props) {
    

    return (
        <>
             <section className="navbar">
        <div
          className="hamburger"
          onClick={() => {
            setmobileNav(true);
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <header className="brand-name">
          <img src={logo} alt="" />
        </header>
        <ul className="first-part-nav nav-items">
          <li className=" nav-item">Men</li>
          <li className=" nav-item">Women</li>
          <li className=" nav-item">Accesories</li>
          <li className=" nav-item">Contact</li>
        </ul>
        <ul className="second-part-nav nav-items">
          <li
            className="nav-item bigSearch"
            style={{
              background: "#e8e8e8",
              borderRadius: "6px",
              padding: "3px 11px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              placeholder="search..."
              style={{ background: "#e8e8e8", border: "none", outline: "none" }}
            ></input>
            <FiSearch size={"1.5em"} />
          </li>
          {/* phone search */}
          <li
            className="hide-sm-search"
            onClick={() => {
              setsearchToggler(!searchToggler);
            }}
           
          >
          <span className='responsive-icon' >  <FiSearch size={"1.5em"} style={{cursor:"pointer"}} /></span>
          
          </li>
          <form
              className={
                searchToggler
                  ? "search-input-container hide-sm-search show-sm-search"
                  : "search-input-container hide-sm-search"
              }
             ref={searchRef}
             onSubmit={handleSubmit}
            >
              <input
                placeholder="search..."
                style={{
                  background: "#e8e8e8",
                  border: "none",
                  outline: "none",
                }}
                value={searchTerm}
                onChange={(e) => {setsearchTerm(e.target.value)}}
               
              ></input>
            </form>
          <li className="nav-item">
            <span className='responsive-icon'>
              <FiUser size={"1.5em"} />
            </span>
          
          </li>
          <li className="nav-item hideWishList">
            <span className='responsive-icon'>
              <FiHeart size={"1.5em"} />
            </span>
            <span className="count">0</span>
          </li>
          <li className="nav-item">
            <span className='responsive-icon'>
              <FiShoppingCart size={"1.5em"} />
            </span>
            <span className="count">0</span>
          </li>
        </ul>
       
      </section>
       {/* burger navbar */}
       <div
          className={
            mobileNav
              ? "mobile-nav-container"
              : "mobile-nav-container hidemobileNav"
          }
        >
          <ul
            className={mobileNav ? "mobile-nav" : "mobile-nav hidemobile"}
            ref={innerRef}
          >
            <header className="mobile-nav-item">
              Welcome Guest{" "}
              <span className="close" style={{ paddingRight: "16px" }}>
                <FiPlus size={"1.5em"} />
              </span>
            </header>
            <li className="mobile-nav-item">Men</li>
            <li className="mobile-nav-item">Women</li>
            <li className="mobile-nav-item">Accesories</li>
            <li className="mobile-nav-item">Contact</li>
            <li className="mobile-nav-item">About Us</li>
          </ul>
        </div>
        </>
    )
}
