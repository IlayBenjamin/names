import { useState } from 'react';

export default function CarRegistrationForm(props) {

    const updateCarListFunction = props.updateCarListFunction;
    //const [inputs, setInputs] = useState({});
    
    //const [title, setTitle] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        //const title = data.get('title');
        //updateCarListFunction(title);
        //console.log("New Title: " + title);
        const brand = data.get('brand');
        const year = data.get('year');
        const color = data.get('color');
        const car = { brand: brand, year: year, color: color };
        //setInputs((values) => ({ ...values, car}));
        //setTitle("Car Registered Successfully!");
        updateCarListFunction(car);
    }

    return (
        <div>
            <h3>Car Registration Form</h3>
           
            <form onSubmit={handleSubmit}>
            <label>Brand: </label>
                <input type="text" name="brand" id="brandInput" />
                <br></br>
                <label>Year: </label>
                <input type="text" name="year" id="yearInput" />
                <br></br>
                <label>Color: </label>
                <input type="text" name="color" id="colorInput" />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}



/*

    
    return (
        <div>
            <h3>Car Registration Form</h3>
            <form>
                <label>Brand: </label>
                <input type="text" name="brand" />
                <br></br>
                <label>Year: </label>
                <input type="text" name="year" />
                <br></br>
                <label>Color: </label>
                <input type="text" name="color" />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

*/