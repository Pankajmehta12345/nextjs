import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/homepage.module.css';
import Link from 'next/link';

const ProductListing = ({ data }) => {
    const [propsData, setPropsData] = useState([]);

    useEffect(() => {
        setPropsData(data);
    }, [])

    console.log(propsData.fsyncHomeSlider?.homeSliderSlides, "datataysfhd")
    return (
        <div className="container-fluid" >
            <h1 className={style.headerTitle}>{propsData?.fsyncHomeSlider?.banner_title[0].title}</h1>
            <div className={style.productList}>
                {propsData?.fsyncHomeSlider?.homeSliderSlides?.map((products, index) => {
                    return (
                        <div className="card col-3" id={style.card}>
                                <div className="card-body">
                                    <img src={`${`https://frontend.hypernode.frontrunneroutfitters.com`}${products.image}`} alt="products" width='100%' />
                                    <h5 className={`$card-title $cardTitle`}>{products?.title}</h5>
                                    <p className="card-text">{products?.subtitle}</p>
                                    <Link href={products.url} class="btn btn-primary">{products?.url_text}</Link>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ProductListing;
