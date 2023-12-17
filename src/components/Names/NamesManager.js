

export default function NamesManager(props) {

    const deleteName = props.deleteName;
    const createName = props.createName;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.name == "delete") {
            const name = { firstname: event.target.firstname.value, lastname: event.target.lastname.value };
            deleteName(name);
        } else if (event.target.name == "create") {
            const name = { firstname: event.target.firstname.value, lastname: event.target.lastname.value };
            createName(name);
        }
    }

    
    const style = {
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
            marginTop: "1%",
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
            marginTop: "1%",
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
            backgroundColor: "Khaki"
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
        }
    }

    
    return (
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
    );

}