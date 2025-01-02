import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <h1>Hello from React!</h1>
        </div>
    );
}

export default App;

if (document.getElementById('react-app')) {
    ReactDOM.render(<App />, document.getElementById('react-app'));
}
