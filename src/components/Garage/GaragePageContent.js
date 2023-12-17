import CarList from './CarList';
import Car from './Car';
import CarRegistrationForm from './CarRegistrationForm';
import GarageStyle from './GarageStyle';
import DefaultCarList from './DefaultCarList';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

export default function GaragePageContent() {
    //const garageTtile = "Welcome to Ilay's Garage!";
    //const carList = DefaultCarList;
    const [carList, setCarList] = useState(DefaultCarList);

    const updateCarListFunction = (car) => {
        car.number = carList.length + 1;
        setCarList([...carList, car]);
        console.log("New Car: " + JSON.stringify(car));        
    }

    return (
        <div style={GarageStyle.container}>

            <div style={GarageStyle.carListAndFormContainer}>
                <div style={GarageStyle.formContainer}>
                    <CarRegistrationForm updateCarListFunction={updateCarListFunction} />
                </div>
                <div id="carListDiv" style={GarageStyle.carListContainer}>
                <CarList id="carListComponent" carList={carList} />
                </div>
            </div>

        </div>

    );
}