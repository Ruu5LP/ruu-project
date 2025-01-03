import React, { useEffect, useState } from "react";

export default function GameScreen() {
    useEffect(() => {
        const audio = new Audio("/music/Whispers_of_the_woods.mp3");
        audio.volume = 0.6;
        audio.loop = true;
        audio.play().catch((error) => {
            console.error("音楽の再生に失敗しました:", error);
        });

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const [activeDescription, setActiveDescription] = useState<string>("");

    const styles = {
        gameMenuContainer: {
            height: "100vh",
            backgroundImage: 'url("/images/middle_eastern_castle02.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: "60vh",
        },
        buttonSet: {
            display: "flex",
            gap: "20px", // ボタン間の隙間を調整
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
            marginBottom: "20px", // 説明欄との余白
        },
        button: {
            all: "unset",
            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(50, 50, 50, 0.7))", // カード風のグラデーション
            color: "white",
            fontSize: "1.5rem",
            borderRadius: "15px", // 角を丸く
            cursor: "pointer",
            transition: "all 0.3s ease",
            textAlign: "center",
            height: "70px", // 高さを固定
            width: "100%", // 幅を100%にして親の幅に合わせる
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // シャドウで立体感
            border: "1px solid #444", // ふちに軽い枠を追加
            borderColor: "#ddd", // 初期の枠色
        },
        buttonHover: {
            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(100, 100, 100, 0.8))", // ホバー時に色を少し変化
            transform: "scale(1.05)", // ホバー時に少し拡大
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5)", // ホバー時にシャドウを強化
            borderColor: "#fff", // ホバー時の枠を明るく
            filter: "brightness(1.2)", // 光沢感を追加
        },
        descriptionContainer: {
            position: "fixed",
            bottom: 0,
            width: "100%",
            background: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "60px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem",
            transition: "opacity 0.3s ease, height 0.3s ease", // 高さの変更をスムーズに
            height: "80px", // 常に一定の高さに
        },
    };

    const descriptions = {
        "ストーリー": "新しい旅に出かけて物語を進めよう！",
        "デッキ": "デッキの編集やカードの一覧を見ることができます。",
        "ガチャ": "貯めたポイントでガチャを引いてみよう！",
        "設定": "様々な設定を行います。",
        "ゲーム終了": "ゲームを終了します。",
    };

    const handleMouseOver = (label: string) => {
        setActiveDescription(descriptions[label]);
    };

    const handleMouseOut = () => {
        setActiveDescription("");
    };

    return (
        <div style={styles.gameMenuContainer}>
            <ul style={styles.buttonSet}>
                {["ストーリー", "デッキ", "ガチャ", "設定", "ゲーム終了"].map((label, index) => (
                    <li key={index} style={{ flex: "1" }}>
                        <button
                            style={{
                                ...styles.button,
                                ...(activeDescription === descriptions[label] ? styles.buttonHover : {}),
                            }}
                            onMouseOver={() => handleMouseOver(label)}
                            onMouseOut={handleMouseOut}
                            onMouseDown={(e) => (e.target.style.transform = styles.buttonHover.transform)}
                            onMouseUp={(e) => (e.target.style.transform = styles.buttonHover.transform)}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>
            <div style={styles.descriptionContainer}>
                <span>{activeDescription || ""}</span>
            </div>
        </div>
    );
}
