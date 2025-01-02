import React from 'react';
import ReactDOM from 'react-dom/client';
import TopScreen from "@/TopScreen/TopScreen";

export default function App() {
    return(
        <>
            <TopScreen />
        </>
    );
};

const rootElement = document.getElementById('app');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
} else {
    console.error('React root element not found!');
}
