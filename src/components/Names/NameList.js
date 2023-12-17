import Name from './Name';

export default function NameList(props) {

    const names = props.names;

    const style = {
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
        }
    }

    return (
        <div style={style.listContainer}>
            <ul style={style.list}>
                {names.map((name) => (<Name key={name.id} firstname={name.firstname} lastname={name.lastname} number={name.id} />))}
            </ul>
       </div>
    );

}