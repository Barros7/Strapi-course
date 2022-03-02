import './depoiment.css';
import React, { Component } from 'react';
import API from '../../../resources/services/connect_api/conectapi';
import { Swiper, SwiperSlide } from 'swiper/react';// Import Swiper React components
import "swiper/css";// Import Swiper styles
import "swiper/css/pagination";
import { Pagination } from "swiper";// import required modules

class Depoiments extends Component{

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
            <main>
                <section className="section" id="testimonials">
                    <div className="container grid">
                        <header>
                            <br/>
                            <br/>
                            <h2 className='title'>Depoimentos dos nossos clientes</h2>
                        </header>
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            <div className="testimonials">
                                <div className='testimonial'>
                                    <SwiperSlide>
                                        <blockquote>
                                            <p>
                                                <span>&ldquo;</span>
                                                Lorem kjnhkjahkj jhajkhhioja jhjahiojhio jhjahiojhio jhjahiojhio jhjahiojhiojhjahioj
                                                Lorem kjnhkjahkj jhajkhhioja jhjahiojhio jhjahiojhio jhjahiojhio jhjahiojhiojhjahioj
                                            </p>
                                            <cite>
                                                <img src={logo} alt='José Bongo' />
                                                José Bongo
                                            </cite>
                                        </blockquote>
                                    </SwiperSlide>
                                </div>
                                <div className='testimonial'>
                                    <SwiperSlide>
                                        <blockquote>
                                            <p>
                                                <span>&ldquo;</span>
                                                Lorem kjnhkjahkj jhajkhhioja jhjahiojhio jhjahiojhio jhjahiojhio jhjahiojhiojhjahioj
                                                Lorem kjnhkjahkj jhajkhhioja jhjahiojhio jhjahiojhio jhjahiojhio jhjahiojhiojhjahioj
                                            </p>
                                            <cite>
                                            <img src={logo} alt='José' />
                                                José
                                            </cite>
                                        </blockquote>
                                    </SwiperSlide>
                                </div>
                                <div className='testimonial'>
                                    <SwiperSlide>
                                        <blockquote>
                                            <p>
                                                <span>&ldquo;</span>
                                                Lorem kjnhkjahkj jhajkhhioja jhjahiojhio jhjahiojhio jhjahiojhio jhjahiojhiojhjahioj
                                                Lorem kjnhkjahkj jhajkhhioja jhjahiojhio jhjahiojhio jhjahiojhio jhjahiojhiojhjahioj
                                            </p>
                                            <cite>
                                            <img src={logo} alt='Bongo' />
                                                Bongo
                                            </cite>
                                        </blockquote>
                                    </SwiperSlide>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </section>
                <div className="divider-1"></div>
            </main>
        );
    };
}

export default Depoiments;