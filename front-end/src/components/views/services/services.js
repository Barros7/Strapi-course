import './services.css';
import React, { Component } from 'react';
import API from '../../../resources/services/connect_api/conectapi';
import { FaPaintRoller } from 'react-icons/fa';
import { MdOutlinePlumbing } from 'react-icons/md';
import { BiBuildingHouse } from 'react-icons/bi';
import { GiDominoTiles } from 'react-icons/gi';

class Services extends Component{

    state = {
        sectionWebsitePresentation: [], 
    } 

    async componentDidMount(){
        
        const response = await API.get('/main');
        //console.log(response.data);
        this.setState({sectionWebsitePresentation: response.data.data.attributes});
    }

    render(){
        return ( 
            <main>
                <section className="section" id="services">
                    <div className="container grid">
                        <header>
                            <h2 className='title'>Serviços</h2>
                            <p>Lorem...</p>
                        </header>
                        <div className="cards grid">
                            <div className="card">
                                <i className='icon'><BiBuildingHouse /></i>
                                <h3 className='title'>Construção</h3>
                                <p>Lorem</p>
                            </div>
                            <div className="card">
                                <i className='icon'><GiDominoTiles /></i>
                                <h3 className='title'>Ladrilho</h3>
                                <p>Lorem</p>
                            </div>
                            <div className="card">
                                <i className='icon'><MdOutlinePlumbing /></i>
                                <h3 className='title'>Canalização</h3>
                                <p>Lorem</p>
                            </div>
                            <div className="card">
                                <i className='icon'><FaPaintRoller /></i>
                                <h3 className='title'>Pintura</h3>
                                <p>Lorem</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider-1"></div>
            </main>
        );
    };
}

export default Services;