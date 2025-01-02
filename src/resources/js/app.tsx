import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
    return <h1>Hello, React + TypeScript + Laravel + Vite!</h1>;
};

const rootElement = document.getElementById('app');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
} else {
    console.error('React root element not found!');
}
