import React from 'react';
import './App.css';
import {Font} from "./Font";

function App() {
    const [text, setText] = React.useState<string>("Your wife's boyfriend is in our custody, send her cat's photo to confirm!");
    return (<div className="App">
        <div>
            <input
                style={{
                    width: "800px", height: "50px", padding: "10px", fontSize: "20px",
                }}
                type="text" placeholder="Type here"
                onChange={e => setText(e.target.value)}/>
        </div>
        <div style={{width: "800px", margin: "0 auto", wordSpacing: "30px", letterSpacing:"5px"}}>
            {text.split('').map((ch, i) => {
                return <Font ch={ch} key={i}/>
            })}
        </div>
    </div>);
}

export default App;
