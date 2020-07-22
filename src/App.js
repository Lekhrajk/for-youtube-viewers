import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './styles/App.css';
import './styles/item.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { NavLink } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { viewState, searchTextState, productFilteredState, filteredCounts } from "./recoil/productRecoil";
import Home from './components/pages/Home';
import AddProduct from './components/products/AddProduct';
import EditProduct from './components/products/EditProduct';
import Error from './components/pages/Error';
import jquery from 'jquery';

function App() {
    const [view, setView] = useRecoilState(viewState);
    const [searchText, setSearchText] = useRecoilState(searchTextState);
    const [filter, setFilter] = useRecoilState(productFilteredState);
    const totalItems = useRecoilValue(filteredCounts);

    // *********************************************
    //            Day/Night mode
    // *********************************************

    const getMode = () => {
        return JSON.parse(localStorage.getItem('mode')) || false
    }
    const [dark, setMode] = useState(getMode);
    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(dark))
    }, [dark])

    // *********************************************
    //            Sdebar toggle in mobile view
    // *********************************************
 
    const toggleSidebar = (e) => {
        e.preventDefault();
        jquery("body").toggleClass("sidenav-toggled");
    }
    const toggleSidebar2 = (e) => {
        e.preventDefault();
        if (window.innerWidth >= 992) {
            return;
        }
        if (jquery("body").hasClass("sidenav-toggled")) {
            jquery("body").toggleClass("sidenav-toggled");
        }
    }


return (
<div className={dark ? "App dark-mode" : "App" }>
    <BrowserRouter>
        <div>
            {/* // *********************************************
            //            Navbar
            // ******************************************** */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    {/* eslint-disable-next-line */}
                    <span className="navbar-brand font-weight-bolder"><a href="/" className="brand d-flex">Shopping <h2 role="img">🍹</h2>Panel</a></span>
                    <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="fas fa-bars fa-lg icon-color"></i></span>
                    </a>
                    <button className="btn btn-icon btn-transparent-dark order-1 order-sm-0 mr-lg-2" id="sidebarToggle" onClick={toggleSidebar}><i className="fab fa-windows fa-lg icon-color"></i></button>
                    <div className="justify-content-end order-10 order-sm-1">
                        <label className="switch">
                            <input type="checkbox" checked={dark} onChange={()=>setMode(!dark)}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link btn btn-primary btn-sm text-white" activeClassName="active_class" exact to="/addProduct">Add Product</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* // *********************************************
            //            Sidebar
            // ******************************************** */}
            
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sidenav shadow-right sidenav-light">
                        <div className="sidenav-menu">
                            <div className="nav accordion" id="accordionSidenav">
                                <div className="sidenav-menu-heading">View Type</div>
                                <div className="mx-auto">
                                    <div className="btn-group">
                                        <button className={`btn ${view==="column" ? 'btn-dark' :'btn-light'} `} type="button" data-toggle="tooltip" data-placement="top" title="column view" onClick={()=> setView('column')} ><i className="fas fa-grip-horizontal"></i></button>
                                        <button className={`btn ${view==="row" ? 'btn-dark' :'btn-light'} `} data-toggle="tooltip" data-placement="top" title="row view" onClick={()=> setView('row')} ><i className="fas fa-th-large"></i></button>
                                    </div>
                                </div>
                                <div className="sidenav-menu-heading">Search here</div>
                                <div className="nav-link mx-auto">
                                    <input className="form-control" type="text" placeholder="enter name..." value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
                                </div>
                                <div className="sidenav-menu-heading">Filter</div>
                                <div className="mx-auto nav-link w-100">
                                    <select className="form-control" value={filter} onChange={(e)=> setFilter(e.target.value)}>
                                        <option value="">Show All</option>
                                        <option value="fruit">Fruits</option>
                                        <option value="vegetables">Vegetables</option>
                                        <option value="meals">Meals</option>
                                        <option value="beverages">Beverages</option>
                                        <option value="utensils">Utensils</option>
                                    </select>
                                </div>
                                <div className="sidenav-menu-heading">Total</div>
                                <div className="nav-link mx-auto">
                                    <span className="badge badge-danger p-2">{totalItems} Products Available</span>
                                </div>
                            </div>
                        </div>
                        <div className="sidenav-footer">
                            <div className="sidenav-footer-content">
                                <div className="sidenav-footer-subtitle">An Iniciative By</div>
                                <div className="sidenav-footer-title">Haryanvi Developer</div>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* // *********************************************
                //            Main content 
                // ******************************************** */}

                <div id="layoutSidenav_content" onClick={toggleSidebar2}>
                    <main>
                        <div className="container-fluid mt-n10">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/addProduct" component={AddProduct} />
                                <Route exact path="/editProduct/:id" component={EditProduct} />
                                <Route component={Error} />
                                <Redirect to="/" />
                            </Switch>
                        </div>
                    </main>
                    {/* // *********************************************
                    //            Footer
                    // ******************************************** */}
                    <footer className="footer mt-auto footer-light py-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 small">Copyright &#xA9; Haryanvi Developer 2020</div>
                                <div className="col-md-6 text-md-right small">
                                    <a href="#!" className="mx-2">Privacy Policy</a>
                                    &#xB7;
                                    <a href="#!" className="mx-2">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </BrowserRouter>
</div>
);
}
export default App;