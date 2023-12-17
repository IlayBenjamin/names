import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


/*
function Message(props) {

  const [title, body, backgroundColor] = [props.title, props.body, props.backgroundColor];

  const style = {
    container: {
      color: "black",
      border: "1px solid black",
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }, 
    centered: {
      textAlign: 'center'
    }

  }

  style.container.backgroundColor = backgroundColor;

  return (

    <div style={style.container}>
      <div style={style.centered}>
        <h1 id='title'>Title: {title}</h1>
        <p>Body: {body}</p>
      </div>
    </div>
  );
}
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {true ? <App/> : "Wrong Password"}
  </React.StrictMode>
);

