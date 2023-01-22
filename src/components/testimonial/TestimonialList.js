import React, { Component } from 'react';
import { testimonialData } from '../../data/testimonialData';
import Testimonial from './Testimonial';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';





SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

class TestimonialList extends Component {

    
    state = {
        testimonials: testimonialData,
        // radios: [
        //     { id: 1, value: "all", icone:<i className="fas fa-check-circle"></i>},
        //     { id: 2, value: "javascript", icone: <i className='fab fa-js'></i> },
        //     { id: 3, value: "css", icone: <i className='fab fa-css3-alt'></i> },
        //     { id: 4, value: "react", icone: <i className='fa fa-react'></i> },
        //     { id: 5, value: "php", icone: <i className='fa fa-php'></i> },
        //     { id: 6, value: "node", icone: <i className='fab fa-node-js'></i> },
        //     { id: 7, value: "c#", icone: <i className='fa fa-csharp'></i> }
        // ],
        // selectedRadio: "all"
    };

    // handleRadio = (event) => {
    //     let radio = event.target.value;
    //     this.setState({selectedRadio: radio})
    // }

    render() {

        const slides = [];

        let { testimonials/*, radios, selectedRadio*/ } = this.state;

        testimonials.forEach(item => {
            slides.push( item.affiche ==='oui' &&
                <SwiperSlide key={`slide-${item.id}`} tag="li">
                    <Testimonial key={item.id} item={item} />
                </SwiperSlide>)
        });
        
        return (
            <div className="testimonialContent">
                {/* <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (   
                                <li key={radio.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        onChange={this.handleRadio} />
                                    <label htmlFor={radio.value}>{radio.icone ? radio.icone : radio.value}</label>
                                </li>
                            )
                        }) 
                    }
                </ul> */}
                        <Swiper
                            id="main"
                            tag="div"
                            wrapperTag="ul"
                            navigation
                            pagination
                            spaceBetween={0}
                            slidesPerView={1}
                             >
                            {slides}
                        </Swiper>

                        <ul className="list">
                        {
                            testimonials
                            .map(item => {
                                return (
                                    <li>
                                        <Testimonial key={item.id} item={item} />
                                    </li>
                                )
                            })
                        }
                        </ul>
            </div>
        );
    }
}

export default TestimonialList;