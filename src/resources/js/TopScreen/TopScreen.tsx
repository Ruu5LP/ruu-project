import React, {useEffect, useRef, useState} from "react";

interface TopScreenProps {
    onClick: () => void;
}
export default function TopScreen({ onClick }: TopScreenProps) {
    const [isFadingOut, setIsFadingOut] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const musicStart = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/music/始まりの断崖.mp3");
            audioRef.current.volume = 0.6;
            audioRef.current.loop = true; // ループ再生
            audioRef.current.play().catch((error) => {
                console.error("音楽の再生に失敗しました:", error);
            });
        }
    }

    const musicStop = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // 再生位置をリセット
            audioRef.current = null; // Audioオブジェクトを破棄
        }
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: "url('/images/66081447_p0.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "opacity 3s", // Smooth opacity transition
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
        transition: "background-color 0.6s",
        margin: "10px 0",
    };

    const handleStartGameClick = () => {
        setIsFadingOut(true);
        setTimeout(() => {
            musicStop(); // 音楽を止める
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
                onClick={musicStart}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
            >
                Settings
            </button>
        </div>
    );
}
