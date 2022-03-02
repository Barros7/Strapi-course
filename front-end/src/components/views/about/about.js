import './about.css';
import React, { Component } from 'react';
import API from '../../../resources/services/connect_api/conectapi';

class About extends Component{

    state = {
        sectionWebsitePresentation: [], 
    } 

    async componentDidMount(){
        
        const response = await API.get('/main');
        //console.log(response.data);
        this.setState({sectionWebsitePresentation: response.data.data.attributes});
    }

    render(){
        const logo = 'http://localhost:1337/uploads/logo_33994cdc63.jpg';
        return (
            <main>
                <section className="section" id="about">
                    <div className="container grid">
                        <div className="image">
                            <img src={logo} alt="logo" />
                        </div>
                        <div>
                          <h2>{this.state.sectionWebsitePresentation.slug}</h2>
                          <h2>Sobre nós</h2><br />
                          <p>Sunt cupidatat excepteur ipsum incididunt sunt ea. Consequat est fugiat cillum eiusmod in eiusmod. Sunt sunt in excepteur ipsum. Veniam officia in magna ad. Eu adipisicing ea est sunt veniam laboris elit voluptate. Enim do consectetur dolor irure culpa tempor ullamco reprehenderit excepteur.</p><br />
                          <p>Sunt cupidatat veniam minim voluptate nisi nisi aute dolore sunt eu enim tempor. Eu consequat dolor duis excepteur ipsum incididunt sunt ea. Consequat est fugiat cillum eiusmod in eiusmod. Sunt sunt in excepteur ipsum. Veniam officia in magna ad. Eu adipisicing ea est sunt veniam laboris elit voluptate. Enim do consectetur dolor irure culpa tempor ullamco reprehenderit excepteur.</p><br />
                      </div>
                    </div>
                </section>
                <div className="divider-1"></div>
            </main>
        );
    };
}

export default About;