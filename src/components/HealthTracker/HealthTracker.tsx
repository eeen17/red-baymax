import React, { useState } from "react";
import { FalseyValue } from "styled-components";

const HealthTracker = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBMI] = useState(0);

    function setHeightOn(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
        setHeight(parseFloat(e.target.value));
    }

    function setWeightOn(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
        setWeight(parseFloat(e.target.value));
    }

    function submitBMI() {
        // console.log("submitted");

        if (weight === 0 || height === 0) {
            alert("Please enter weight and height");
        } else {
            setBMI((weight / (height * height)) * 703);
            // console.log(bmi);
        }
    }

    return (
        <>
            <form
                id="BMI Calculator"
                onSubmit={(e) => {
                    e.preventDefault(); // stops page from reloading everytime you submit to see what the BMI is
                }}
            >
                <h2 className="top">BMI Calculator</h2>
                <div>
                    <label>Weight (lbs): </label>
                    <input
                        placeholder="input weight here"
                        type="number" // can only input numbers
                        onChange={(e) => {
                            setWeightOn(e);
                        }}
                    ></input>
                </div>
                <div>
                    <label>Height (in): </label>
                    <input
                        placeholder="input height here"
                        type="number" // can only input numbers
                        onChange={(e) => {
                            setHeightOn(e);
                        }}
                    ></input>
                </div>
                <div className="SubmitButton">
                    <button
                        className="button"
                        type="submit"
                        onClick={submitBMI} // if method doesn't have parameters, can be inserted like this
                    >
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
