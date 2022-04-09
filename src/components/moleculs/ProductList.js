import React from "react";
import CardProduct from "./CardProduct";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "../../screens/pujas.css";

// import required modules
import { Grid, Pagination } from "swiper";

// Función para mapear el componente Card con todas las popiedades que se le pasen. EN PROCESO.
const ProductList = ({ products }) => {
    return (
        <>
            <Swiper

            breakpoints={{
                640: {
                width: 640,
                slidesPerView: 1,
                },
                768: {
                width: 768,
                slidesPerView: 2,
                },
            }}

            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
        >
                { products.length > 0 ? (
<<<<<<< HEAD
                    products.map(product => (
                        <SwiperSlide key={product.id}>
                            <CardProduct
                                key={product.id}
=======
                    products.map((product, index) => (
                    
                        <SwiperSlide  key={index}>
                            <CardProduct
>>>>>>> 6d6906c6814cfc3ba565b9ec3294a074d46b4a83
                                title={product.title}
                                price={product.price}
                                image={product.thumbnail}
                            />
                        </SwiperSlide>
                    ))
                )
                : (<p>Cargando Productos...</p>)
                }

             </Swiper>
        </>
    );
};
export default ProductList;
