import './home.css';
import React, { Component } from 'react';
import API from '../../../resources/services/connect_api/conectapi';

class Home extends Component{

    state = {
        sectionWebsitePresentation: [], 
    } 

    async componentDidMount(){
        
        const response = await API.get('/main');
        //console.log(response.data);
        this.setState({sectionWebsitePresentation: response.data.data.attributes});

    }
    
    render(){
        function doOrcament(){
            alert('No implemented!')
        }

        const logo = 'http://localhost:1337/uploads/quem_somos_dc093f7be1.jpg';
        
        return (
            <main>
                <section className="section" id="home">
                    <div className="container grid">
                        <div className="image">
                            <img src={logo} alt="logo" />
                        </div>
                        <h1>{this.state.sectionWebsitePresentation.slug}</h1>
                        <p>{this.state.sectionWebsitePresentation.slug1}</p>
                        <a href="#" className="button" onClick={doOrcament}>Fazer um orçamento</a>
                    </div>
                </section>
                <div className="divider-1"></div>
            </main>
        );
    };
}

export default Home;