import Car from "./Car";
import { useState } from 'react';

export default function CarList(props) {
        
        //const [carList, setCarList] = useState(props.carList);
       // const [carList, setCarList] = [ props.carList , props.setCarList ];
        const carList = props.carList;


        const style = {
            container: {
                border: "1px solid black",
            },
        }
    
        return (
            <div style={style.container}>
                <div>
                    <ul>
                        {carList.map((car) => {
                            return (
                                <>
                                    <Car
                                        key={"car" + car.number}
                                        number={car.number}
                                        brand={car.brand}
                                        year={car.year}
                                        color={car.color}
                                        
                                    />
                                    <br></br>
                                </>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
}