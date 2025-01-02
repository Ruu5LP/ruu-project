import React, {useState} from "react";

interface TopScreenProps {
    onClick: () => void;
}
export default function TopScreen({ onClick }: TopScreenProps) {
    const [isFadingOut, setIsFadingOut] = useState(false);

    const containerStyle = {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: "url('/images/66081447_p0.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "opacity 2s", // Smooth opacity transition
        opacity: isFadingOut ? 0 : 1, // Fading logic based on state
    };

    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "1.2rem",
        cursor: "pointer",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#007BFF",
        color: "white",
        transition: "background-color 0.3s",
        margin: "10px 0",
    };

    const handleStartGameClick = () => {
        setIsFadingOut(true);
        setTimeout(() => {
            onClick(); // Switch to the next screen after fade-out
        }, 2000); // Wait for the fade-out to finish before executing onClick
    };

    return (
        <div style={containerStyle}>
            <img
                src="/images/001-removebg-preview.png"
                alt="Collection King"
                style={{width: "auto", height: "400px", marginBottom: "20px"}}
            />
            <button
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
                onClick={handleStartGameClick}
            >
                Start Game
            </button>
            <button
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
            >
                Settings
            </button>
        </div>
    );
}
