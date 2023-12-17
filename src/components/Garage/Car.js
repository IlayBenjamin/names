
 export default function Car(props) {

    const [brand, year, color, number] = [props.brand, props.year, props.color, props.number];
    const id = ("car" + props.number);
    const boldFont = {
        fontWeight: "bold"
    }

           //<span style={style}> </span>

    return (
        <>
            <li id={id}>Car {number}. <br></br>
            <span style={boldFont}>Brand: </span> {brand} , 
            <span style={boldFont}>Year: </span> {year} , 
            <span style={boldFont}>Color: </span> {color} .
            </li> 
        </> 
    );
}
  