import './header.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { HiMenu } from  'react-icons/hi';
import { AiOutlineClose } from  'react-icons/ai';
import React, {useState} from 'react';

function Header() {

  const [show, setShow]=useState(true)
  return (
    <Router>
      <header className="header" id="header">
          <nav className="container show">
              <a className="logo" href="#">v.Bongo <span>Consprojeto</span></a>
              {
                !show?
                <div className="menu">  
                  <ul className='grid'>
                    <li className="title"><Link to='/' onClick={()=>setShow(!show)} className='a'>Home</Link></li>
                    <li className="title"><Link to='/about' onClick={()=>setShow(!show)} className='a'>About</Link></li>
                    <li className="title"><Link to='/service' onClick={()=>setShow(!show)} className='a'>Services</Link></li>
                    <li className="title"><Link to='/project' onClick={()=>setShow(!show)} className='a'>Project</Link></li>
                    <li className="title"><Link to='/contact' onClick={()=>setShow(!show)} className='a'>Contact</Link></li>
                  </ul>
                </div>:show
              }
              <div className='toogle icon-menu' onClick={()=>setShow(!show)}><HiMenu /></div>
              <div className='toogle icon-close' onClick={()=>setShow(!show)}><AiOutlineClose /></div>
          </nav>
      </header>
    </Router>
  );
}

export default Header;