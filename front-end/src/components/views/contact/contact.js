import './contact.css';
import React, { Component } from 'react';
import API from '../../../resources/services/connect_api/conectapi';
import { BsTelephone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';

class Contacts extends Component{

    state = {
        sectionWebsitePresentation: [], 
    } 

    async componentDidMount(){
        
        const response = await API.get('/main');
        //console.log(response.data);
        this.setState({sectionWebsitePresentation: response.data.data.attributes});
    }

    render(){
        const logo = 'http://localhost:1337/uploads/quem_somos_dc093f7be1.jpg';

        return ( 
            <main className="section" id="contact">
                <section className="section" id="contact">
                    <div className="container grid">
                        <div className='text'><br />
                            <h2 className='title'>Entre em contacto connosco!</h2><br />
                            <p>Entre em contacto com a v.Bongo Consprojeto, queremos tirar as tuas dúvidas, ouvir tuas 
                                sugestões e críticas.
                            </p>
                            <a href='https://api.whatsapp.com/send?phone=+351932434882&text=message' className='button' target='_blank'>
                                <i><ImWhatsapp /></i>Entrar em contato
                            </a>
                        </div>
                        <div className='links'>
                            <ul className='grid'>
                                <li><i><BsTelephone /></i>+351 932 434 882</li>
                                <li><i><GoLocation /></i>Vereda de Catassol 4470-123 Maia</li>
                                <li><i><AiOutlineMail /></i>josebarros412@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="divider-1"></div>
            </main>
        );
    };
}

export default Contacts;