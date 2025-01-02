import React from "react";

export default function TopScreen() {
    const containerStyle = {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: "url('/path/to/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const titleStyle = {
        fontSize: "3rem",
        color: "#ffffff",
        marginBottom: "20px",
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

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>My Awesome Game</h1>
            <button
                style={buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
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
