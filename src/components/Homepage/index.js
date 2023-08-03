import React from "react";
import Calculator from "../Calculator";
import Form from "../Form";
import './style.scss'
import Records from "../Records";
const Homepage = (props) => {
    return (
        <div className="homepage">
            <div className="calculator-section">
                <Calculator />
                <div className="form-section">
                    <Form />
                </div>
            </div>
            <div className="record-section">
                <Records />
            </div>
        </div>

    )
}

export default Homepage;