import Header from './Header';
import { useState, useEffect } from 'react';


export const GetMarginHeaderStyle = {
    marginTop: GetMarginHeader(),
    backgroundColor: GetBackground()
}

function GetBackground() {
    const screenWidth = window.innerWidth;
    const newMarginTop = screenWidth > 700 ? ( screenWidth > 1000 ? ( screenWidth > 1500 ? "green" : "yellow") : "orange") : "red";
    return newMarginTop;
}


export  function GetMarginHeader() {
    const screenWidth = window.innerWidth;
    const newMarginTop = screenWidth > 700 ? ( screenWidth > 1000 ? ( screenWidth > 1500 ? 130 : 140) : 160) : 180;
    return newMarginTop;
}

export function FixMarginHeader(setStyle) {

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        const newMarginTop = GetMarginHeader();
        const newBackground = GetBackground();
        const style = {
            marginTop: newMarginTop,
            backgroundColor: newBackground
        }
        //console.log("User Screen Width: " + screenWidth);
        //console.log("New Margin Top: " + newMarginTop);
        //console.log("New Background: " + newBackground)`;
        //console.log("");`
        //console.log("");
        setStyle(style);
      //  setMarginTop(newMarginTop);
    };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
}


export default function NewPage(props) {

    const pageName = props.pageName;
    const pageTitle = props.pageTitle;
    const pageTitleStyle = props.pageTitleStyle;

    //console.log("daf" + pageTitleStyle);

    const [style, setStyle] = useState({
        marginTop: GetMarginHeader(),
        backgroundColor: GetBackground()
    });
    
    useEffect(() => {
        //console.log("");
        //console.log("------------------");
        //console.log("");
        //console.log("Header: useEffect");
        //console.log("");
        FixMarginHeader(setStyle);
      }, []);




    return (
        <div>
            <Header />
            <div style={style}>

                
                {
                    (pageTitle || pageName) ?
                        <h2 style={(pageTitleStyle ? pageTitleStyle : {})}> 
                             {pageTitle ? pageTitle : pageName}  </h2> :
                            <></>
                }
                                 

            </div>
            
        </div>
    );
    
}