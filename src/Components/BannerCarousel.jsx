import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from './logo.svg'
import './BannerCarousel.css'

export default function BannerCarousel() {
  return (
    <div className="BannerCarousel" style={{width:"100%"}}>
    <Carousel autoPlay={true} interval={6000} showStatus={false} showThumbs={false} >
        <div>
            <picture> 
                <source media="(min-width: 575px)" srcSet="https://cdn11.bigcommerce.com/s-l486xl2i74/images/stencil/original/image-manager/dt-1b-14sep2023.jpg?t=1694694389"/> 
                <img alt="album" src="https://cdn11.bigcommerce.com/s-l486xl2i74/images/stencil/original/image-manager/mo-1-14sep2023.jpg?t=1694693586"/> 
                <div className="ShopNowButton"> <a href="/shop-by-collection/basics-2023/" className="button button--primary" tabIndex="0"> SHOP NOW </a> </div>
            </picture>
        </div>
        <div>
        <picture> 
            <source media="(min-width: 575px)" srcSet="https://cdn11.bigcommerce.com/s-l486xl2i74/images/stencil/original/image-manager/dt-2a-14sep2023.jpg?t=1694693634"/> 
            <img alt="album" src="https://cdn11.bigcommerce.com/s-l486xl2i74/images/stencil/original/image-manager/mo-sunkissed1-01aug2023.jpg?t=1690891601"/> 
        </picture>
        </div>
        <div>
        <picture> 
            <source media="(min-width: 575px)" srcSet="https://cdn11.bigcommerce.com/s-l486xl2i74/images/stencil/original/image-manager/dt-.jpg?t=1698908001"/> 
            <img alt="album" src="https://cdn11.bigcommerce.com/s-l486xl2i74/images/stencil/original/image-manager/mobile.jpg?t=1698908011"/> 
        </picture>
        </div>
    </Carousel>
    </div>
  )
}
