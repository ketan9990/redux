import React from 'react'

function Home() {
  return (
    <div>
        <div className="add-to-cart">
            <img src="https://www.mangoextensions.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/j/ajaxaddtocartsite.jpg" alt="cart" />
        </div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">

              <img src="https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG" alt="iphone" />
              
              <div className="text-wrapper item">
                <span>I Phone</span>
                <span>Prise $ 1000</span>
              </div>

              <div className="btn-wrapper item">
                <button>Add to Cart</button>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Home