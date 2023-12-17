import { Link, Outlet} from 'react-router-dom';


export default function Header() {


    const styles = {
        container: {
            backgroundColor: "Khaki",
            display: "flex",
            width: "100%",
            height: "auto",
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            boxShadow:
                "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

        },

        navigationContainer: {
            width: "100%",
            height: "auto",
            marginLeft: "10px",
            marginRight: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            display: "flex",
            justifyContent: "space-between",
            boxSizing: "border-box",
            marginBottom: "10px"
        },

        titleContainer: {
            width: "auto",
            marginLeft: "10px",
            fontSize: "21px", // Adjust font size of the titleS
            marginTop: "auto",
            marginBottom: "auto",
            textAlign: "center",
        },


        listContainer: {
            width: "auto",
            marginTop: "0px",
        },

        itemsContainer: {},

        title: {
            marginTop: "0px",
            marginBottom: "0px",
            color: "white",
            width: "auto",
            height: "auto",
            paddingLeft: "17px",
            paddingRight: "17px",
            fontFamily: "Arial, Helvetica, sans-serif",
            letterSpacing: "0.5px",
            borderBottom: "3px solid black",
            textShadow:
                "2px 2px black, 2px -2px black, -2px 2px black, -2px -2px black",

        },

        list: {
            padding: "0",
            display: "flex",
            listStyle: "none",
        },

        listItem: {
            borderRadius: "20%",
            width: "auto",
            height: "auto",
            marginRight: "25px", // Increase margin between list items
            marginLeft: "25px", // Increase margin between list items
            padding: "15px",
            fontSize: "21px",
            fontWeight: "550",
            letterSpacing: "0.4px",
            fontFamily: "Arial, Helvetica, sans-serif",
            boxShadow:
                "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.navigationContainer}>
                <div style={styles.titleContainer}>
                    <h1 style={styles.title}>React-Tutorial-2</h1>
                </div>

                <div style={styles.listContainer}>
                    <ul style={styles.list}>
                        <div style={styles.itemsContainer}></div>
                        <Link to="/home"><li style={styles.listItem}>Home</li></Link>
                        <Link to="/about"><li style={styles.listItem}>About</li></Link>
                        <Link to="/contact"><li style={styles.listItem}>Contact</li></Link>
                        <Link to="/garage"><li style={styles.listItem}>Garage</li></Link>
                        <Link to="/names"><li style={styles.listItem}>Names</li></Link>
                    </ul>
                </div>
            </div>

            <Outlet></Outlet>
        </div>
    );
}
