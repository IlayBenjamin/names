import Name from "./Name";
import NamesManager from "./NamesManager";
import { useState } from "react";
import NameList from "./NameList";

export default function NamesPageContent () {

    
    const style = {

        container: {
            width: "auto",
            height: "auto",
            backgroundColor: "Khaki",
            justifyContent: "center",
            alignItems: "center",
        },
    }



    const [names, setNames] = useState([{ firstname: "John", lastname: "Weak", id: 1 }, { firstname: "Jane", lastname: "Monro", id: 2 }, { firstname: "Jack", lastname: "Sparrow", id: 3 }]);

    const createName = (name) => {
        const id = names[names.length - 1].id + 1;
        name.id = id;
        setNames([...names, name]);
    }

    const deleteName = (name) => {
        const checkName = (cName, name) => cName.firstname == name.firstname && cName.lastname == name.lastname;
        const reversed = [...names].reverse();
        //reversed.forEach(cName => delete cName.id);
        reversed.forEach( (cName, rInedx, reversed) => {
            if (checkName(cName, name)) {
                const index = reversed.length - rInedx - 1;
                console.log("rIndex: " + rInedx + " index: " + index );
                const list = names.slice(0, index).concat(names.slice(index + 1, names.length));
                setNames(list);
            }
        }, name);
    }


    return (
        
        <div style={style.contentContainer}>

        <NamesManager createName={createName} deleteName={deleteName}/>

        <div style={style.listContainer}>

            <NameList names={names} />

        </div>

        </div>
    );
}