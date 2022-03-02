import './footer.css';
import React, { Component } from 'react';
import API from '../../../resources/services/connect_api/conectapi';
import { FiArrowUp } from 'react-icons/fi';
import { AiFillInstagram } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';

class Footer extends Component{

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
            <footer>
                <div className="divider-1"></div>
                <div className="container grid">
                    <div className='brand'>
                        <a className='logo'>v.Bongo <span>Consprojeto</span>.</a>
                        <p> © 2022 BonTech.</p>
                        <p>Todos os direitos reservados.</p>
                    </div>
                    <div className='social'>
                        <a href='https://instagram.com' className='instagram' target='_blank'>
                            <i><AiFillInstagram /></i>
                        </a>
                        <a href='https://facebook.com' className='facebook' target='_blank'>
                            <i><FiFacebook /></i>
                        </a>
                        <a href='https://youtube.com' className='youtube' target='_blank'>
                            <i><FaYoutube /></i>
                        </a>
                    </div>
                </div>
                <a href="#Home" className="back-to-top"><i><FiArrowUp /></i></a>
            </footer>
        );
    };  
}

export default Footer;