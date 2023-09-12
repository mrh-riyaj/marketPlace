import { createPortal } from "react-dom"
import LinkButton from "../LinkButton"
import Button from "../Button"
import Input from "../Input"

const ForProductEdit = (props) => {
    return(
        createPortal(
        <div className="middle-popup-main-container d-flex position-a">
            <div className="edit-product-container position-a">
                <div className="popup-header d-flex">
                    <div className="popup-title">Edit product</div>
                    <span className="popup-close" onClick={props.onClose}>
                        <i className="icon-cancel-circle"></i>
                    </span>
                </div>
                <div className="form-container">
                    <div className="formRow">
                        <div className="clm">
                            <span className="label">Change Categories</span>
                            <select className="input-body" name="categoryId">
                                <option>-- Categories --</option>
                                <option value="1">Beauty</option>
                                <option value="2">Baby products</option>
                                <option value="3">Books</option>
                                <option value="4">Beverages</option>
                                <option value="5">Clothing</option>
                                <option value="6">Cleaning Supplies</option>
                                <option value="7">Electronics</option>
                                <option value="8">Musical instruments</option>
                                <option value="9">Office Products</option>
                                <option value="10">Property for sale</option>
                                <option value="11">Sports</option>
                                <option value="12">Toys and games</option>
                                <option value="13">Vehicles</option>
                                <option value="14">Watches</option>
                            </select>
                        </div>
                        <div className="clm">
                            <span className="label">Change Condition</span>
                            <select className="input-body" name="productCondition">
                                <option className="options">-- Select condition --</option>
                                <option className="options" value="New">New</option>
                                <option className="options" value="Used-like-new">Used like new</option>
                                <option className="options" value="Used-good">Used good</option>
                                <option className="options" value="Used-fair">Used fair</option>
                            </select>
                        </div>
                        <div className="clm">
                            <Input input label="Change product name" />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Input input type="number" label="Change price" />
                        </div>
                        <div className="clm">
                            <Input input type="number" label="Change old price" />
                        </div>
                        <div className="clm">
                            <Input input label="Change seller location" />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Input textarea label="Change details" />
                        </div>
                        <div className="clm">
                            <Input imageSelector class="select-photo" label="Change product image" />
                        </div>
                    </div>
                    <div className="submit-section  d-flex">
                        <LinkButton text="Cancel" color="red" onClick={props.onClose} />
                        <Button text="Save" type="primary" />
                    </div>
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default ForProductEdit