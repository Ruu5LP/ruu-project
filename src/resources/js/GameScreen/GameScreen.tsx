import React from "react";

export default function GameScreen() {

    const styles = {
        gameMenuContainer: {
            height: '100vh',
            backgroundImage: 'url("/images/middle_eastern_castle02.png")', // 画像のパスを指定
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingBottom: '10vh', // 画面上部から少し下に配置
        },
        menuButtons: {
            display: 'flex',
            flexDirection: 'row',
            gap: '20px', // ボタン間の隙間
        },
        button: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 半透明の背景
            color: 'white',
            fontSize: '24px',
            padding: '20px 40px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
    };
    return (
        <div style={styles.gameMenuContainer}>
            <div style={styles.menuButtons}>
                <button style={styles.button}>ボタン1</button>
                <button style={styles.button}>ボタン2</button>
                <button style={styles.button}>ボタン3</button>
                <button style={styles.button}>ボタン4</button>
            </div>
        </div>
    );
};
