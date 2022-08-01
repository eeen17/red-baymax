import React, { useState } from "react";
import { FalseyValue } from "styled-components";

const HealthTracker = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBMI] = useState(0);

    function setHeightOn(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target);
        setHeight(parseFloat(e.target.value));
    }

    function setWeightOn(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target);
        setWeight(parseFloat(e.target.value));
    }

    function submitBMI() {
        if (weight === 0 || height === 0) {
            alert("Please enter weight and height");
        } else {
            setBMI((weight / (height * height)) * 703);
        }
    }

    return (
        <>
            <h2 className="top">BMI Calculator</h2>
            <form>
                <div>
                    <label>Weight (lbs): </label>
                    <input
                        placeholder="input weight here"
                        type="number"
                        onChange={(e) => {
                            setWeightOn(e);
                        }}
                    ></input>
                </div>
                <div>
                    <label>Height (in): </label>
                    <input
                        placeholder="input height here"
                        type="number"
                        onChange={(e) => {
                            setHeightOn(e);
                        }}
                    ></input>
                </div>
                <div>
                    <button className="btn" type="submit" onSubmit={submitBMI}>
                        Submit
                    </button>
                    {/* <button className="btn btn-outline" type="submit">
                        Submit
                    </button> */}
                </div>
            </form>
            <div className="center">
                <h3>Your BMI is: {bmi}</h3>
            </div>
        </>
    );
};

export default HealthTracker;
