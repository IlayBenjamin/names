
import NewPage from '../components/NewPage';
import { useState } from 'react';

export default function Home() {

    //const [name, setName] = useState("John");
    const [names, setNames] = useState([{ firstname: "John", lastname: "Weak" }, { firstname: "Jane", lastname: "Monro" }, { firstname: "Jack", lastname: "Sparrow" }]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.name === "delete") {
            // const [firstname, lastname] = [event.target.firstname.value, event.target.lastname.value] 
            const name = { firstname: event.target.firstname.value, lastname: event.target.lastname.value };
            //alert("selected name: " + JSON.stringify(name));
            names.forEach((cName, number) => {
                console.log(JSON.stringify(cName));
                if (cName.firstname === name.firstname && cName.lastname === name.lastname) {
                    //alert("Delete: at index: " + number);
                    const list = names.slice(0, number).concat(names.slice(number + 1, names.length));

                    setNames(list);
                    return;
                }
            }, name);
            console.log("Delete");

        } else if (event.target.name === "create") {
            console.log("Create");
            setNames([...names, { firstname: event.target.firstname.value, lastname: event.target.lastname.value }]);
        }
    }


    const style = {

        container: {
            width: "auto",
            height: "auto",
            backgroundColor: "Khaki",
            justifyContent: "center",
            alignItems: "center",
        },

        listContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            height: "auto",
            width: "100%",
            margin: "auto",
            backgroundColor: "Khaki"
        },

        inputs: {
            marginTop: "6px",
            marginBottom: "6px",
            paddingTop: "3px",
            paddingBottom: "3px",
            paddingLeft: "7px",
            paddingRight: "7px",
            letterSpacing: "0.3px",
            fontFamily: "Arial, Helvetica, sans-serif",
            width: "80%"
        },

        formContainer1: {
            position: "fixed",
            // marginTop: "4%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            padding: "15px",
            height: "auto",
            width: "20%",
            backgroundColor: "Khaki",
            marginLeft: "75%",
            borderRadius: "2%",
            boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        },

        formContainer2: {
            position: "fixed",
            //    marginTop: "4%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            padding: "15px",
            height: "auto",
            width: "20%",
            backgroundColor: "Khaki",
            marginRight: "75%",
            borderRadius: "2%",
            boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        },

        formsContainer: {
            display: "flex",
            justifyContent: "center",
            padding: "18px",
            height: "auto",
            width: "auto",
            backgroundColor: "Khaki",
            //marginTop: "8%"
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
        },

        deleteButton: {
            marginTop: "10px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "2%",
            padding: "2px 5px 2px 5px",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid red",
            boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        },

        createButton: {
            marginTop: "10px",
            backgroundColor: "green",
            color: "white",
            borderRadius: "2%",
            padding: "2px 5px 2px 5px",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid green",
            boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        },

        list: {
            width: "auto",
            height: "auto",
            padding: "12px 50px 12px 50px",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "2%",
            paddingLeft: "9%",
            paddingRight: "9%",
            maxWidth: "29%"

        },


    };

    document.body.style.backgroundColor = "Khaki";

    return (

        <div style={style.container}>

            <NewPage />



                <div style={style.formsContainer}>

                    <div style={style.formContainer1}>

                        <form name="delete" onSubmit={(event) => handleSubmit(event)}>
                            <h3>Delete Name</h3>
                            <label>firstname: </label>
                            <input style={style.inputs} type="text" name="firstname" />
                            <br></br>
                            <label>lastname: </label>
                            <input type="text" style={style.inputs} name="lastname" />
                            <br></br>
                            <input style={style.deleteButton} type="submit" value="Delete!" />
                        </form>

                    </div>

                    <div style={style.formContainer2}>

                        <form name="create" onSubmit={(event) => handleSubmit(event)}>
                            <h3>Create Name</h3>
                            <label>firstname: </label>
                            <input type="text" style={style.inputs} name="firstname" />
                            <br></br>
                            <label>lastname: </label>
                            <input type="text" style={style.inputs} name="lastname" />
                            <br></br>
                            <input style={style.createButton} type="submit" value="Create!" />
                        </form>

                    </div>

                </div>

                <div style={style.listContainer}>

                    <ul style={style.list}>
                        {names.map((name, index) => {
                            return (
                                <>
                                    <li style={style.nameItem}> {index + 1}.
                                        <br></br>
                                        <span> firstname: {name.firstname}</span>
                                        <br></br>
                                        <span> lastname: {name.lastname}</span>
                                    </li>
                                    <br></br>
                                </>
                            );
                        })}
                    </ul>

                </div>
 
        </div>

    );

}