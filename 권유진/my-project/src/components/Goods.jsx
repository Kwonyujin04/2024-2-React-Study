import React from 'react'

const IMG_BASE_URL = "https://shopby-images.cdn-nhncommerce.com";

export default function Goods({ name, img_path, price }) {
    return (
        <div className='goods-container'>
            <img src={IMG_BASE_URL + img_path} alt="상품이미지" />
            <div className='goods-info'>
                <h4>{name}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}