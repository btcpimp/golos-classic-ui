import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Slider from 'react-slick';
import styled from 'styled-components';
import Userpic from 'app/components/elements/Userpic';
import './WelcomeSlider.scss';

const SliderSlide = styled.div`
    position: relative;
    padding: 0 63px;

    &:after,
    &:before {
        position: absolute;
        content: '';
        width: 39px;
        height: 26px;
        background: url('/images/new/welcome/slider-slide.svg');
        background-size: 39px 26px;
    }

    &:before {
        top: 3px;
        left: 0;
    }

    &:after {
        right: 0;
        bottom: 3px;
    }
`;

const QuoteName = styled.div`
    margin-bottom: 15px;
    line-height: 1.39;
    font-weight: bold;
    font-size: 21px;
    color: #fff;
`;

const Position = styled.span`
    display: inline-block;
`;

const QuoteDescription = styled.div`
    font-size: 17px;
    font-weight: 300;
    line-height: 1.5;
    color: #fff;
`;

export default class WelcomeSlider extends Component {
    static propTypes = {
        slides: PropTypes.array,
    };

    static defaultProps = {
        slides: [],
    };

    render() {
        const { slides } = this.props;

        const settings = {
            //  vertical: true,
            dots: true,
            fade: true,
            arrows: false,
            infinite: true,
            adaptiveHeight: true,
            autoplay: true,
            pauseOnHover: true,
            focusOnSelect: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'welcome-slider',
            dotsClass: 'welcome-slider__dots',
            customPaging: this._renderPagingItem,
        };

        return (
            <div>
                <Slider {...settings} ref="slider">
                    {slides.map((slide, i) => (
                        <Link key={i} to={slide.link}>
                            <SliderSlide>
                                <QuoteName>
                                    {slide.name}
                                    <Position>, {slide.position}</Position>
                                </QuoteName>
                                <QuoteDescription>
                                    {slide.description}
                                </QuoteDescription>
                            </SliderSlide>
                        </Link>
                    ))}
                </Slider>
            </div>
        );
    }

    _renderPagingItem = i => {
        const { slides } = this.props;

        return <Userpic imageUrl={slides[i].avatar} width={40} height={40} />;
    };
}
