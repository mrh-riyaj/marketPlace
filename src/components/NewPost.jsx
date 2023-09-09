import { useState } from "react"
import ForProductDetails from "./popUps/ForProductDetails"

const NewPost = (props) => {
    const [ProductDetailsPopUp, setProductDetailsPopUp] = useState(false)

    return (
        <section className="new-posts position-r">
            <div onClick={() => setProductDetailsPopUp(true)}>
                <div className="post-images d-flex">
                    <img src={props.productImage}/>
                </div>
                <div className="info-section">
                    {props.price && <span className="price">৳{props.price}</span>}
                    {props.oldPrice && <del className="price old">৳{props.oldPrice}</del>}
                    {props.name && <div className="product-name">{props.name}</div>}
                    {props.sellerLocation &&
                        <div className="d-flex">
                            <span className="location">{props.sellerLocation}</span>
                            <i className="locket-icon icon-location"></i>
                        </div>
                    }
                </div>
            </div>

            {ProductDetailsPopUp && <ForProductDetails
                sendBtn
                saveIcon
                sendMessage
                id={props.id}
                name={props.name}
                price={props.price}
                title="Product details"
                oldPrice={props.oldPrice}
                sellerName={props.sellerName}
                sellerImage={props.sellerImage}
                productImage={props.productImage}
                sellerLocation={props.sellerLocation}
                productDetails={props.productDetails}
                productCondition={props.productCondition}
                onClose={() => setProductDetailsPopUp(false)}
            />}
        </section>
    )
}

export default NewPost