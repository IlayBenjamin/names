import NamesPageContent from '../components/Names/NamesPageContent';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function Names() {

    const [marginTop, setMarginTop] = useState('');

    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth;
          const newMarginTop = screenWidth > 700 ? ( screenWidth > 1000 ? ( screenWidth > 1500 ? 120 : 120) : 150) : 170;
        //  setMarginTop(newMarginTop);
        console.log("User Screen Width: " + screenWidth);
        //setColor(newMarginTop);
        setMarginTop(newMarginTop);
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const style = {
        container: {},
        contentContainer: {
          marginTop: marginTop,
        },

      };
    document.body.style.backgroundColor = "Khaki";

    return (
        <div style={style.container}>

                <Header />
            


            <div style={style.contentContainer}>
        
                <NamesPageContent />

            </div>
        </div>
    );
}