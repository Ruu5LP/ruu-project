import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import TopScreen from "@/TopScreen/TopScreen";
import GameScreen from "@/GameScreen/GameScreen";
import MainFrame from "@/Frame/MainFrame";

export default function App() {

    const [isTop, setIsTop] = useState(true);

    const startButton = () => {
        setIsTop(false);
    }

    return(
        <MainFrame onBack={ () => {} }>
            { isTop ?  <TopScreen onClick={ startButton } /> : <GameScreen /> }
        </MainFrame>
    );
};

const rootElement = document.getElementById('app');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
} else {
    console.error('React root element not found!');
}
