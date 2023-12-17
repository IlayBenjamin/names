

export default function Name(props) {
            
    const [firstname, lastname, number] = [props.firstname, props.lastname, props.number];
    const id = "name" + number;

    const style = {
        container: {
            
        }, 
        nameItem: {
            width: "auto",
            height: "auto",
            padding: "5px 50px 5px 50px",
            paddingTop: "3px",
            paddingBottom: "3px",
            paddingLeft: "10px",
            paddingRight: "10px",
            letterSpacing: "0.3px",
            fontFamily: "Arial, Helvetica, sans-serif",
            justifyContent: "center",
            alignItems: "center",            
            boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "2%"
        }
    }



    return (
        <>
            <li id={id} style={style.nameItem}> {number}.
            <br></br>
            <span> firstname: {firstname}</span>
            <br></br>
            <span> lastname: {lastname}</span>   
            </li>
            <br></br>                    
        </>
    );
}