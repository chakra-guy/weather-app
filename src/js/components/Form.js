import React from "react";

const Form = (props) => (
    <form onSubmit={props.getWeatherSubmit}>
        <input type="text" name="city" placeholder="City"/>
        <input type="text" name="country" placeholder="County"/>
        <button>Get weather</button>
    </form>
);

export default Form;
