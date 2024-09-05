import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('')

    const onClick = () => setToggle(prev => !prev);

    useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 100)
    }, [])

    return (
        <div>
            {toggle === true && <div data-testid="toggle-elem">toggle</div>}
            {data && <div style={{color: 'red'}}>data</div>}
            <h1>Hello world</h1>
            <button data-testid="toggle-btn" onClick={onClick}>Click me</button>
            <input
                onChange={e => setValue(e.target.value)} type={"text"} value={value}
                placeholder={'input value...'} data-testid="value-elem"
            />
        </div>
    );
}

export default App;
