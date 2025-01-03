import React, { useState } from 'react';

export default function CardDeckEditor() {
    // カードの詳細情報を管理するためのstate
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    const [deck, setDeck] = useState<Array<number | null>>(Array(10).fill(null)); // 10枚のデッキ（最初は空の状態）

    // リーダーカードの詳細情報（仮のデータ）
    const leaderCard = {
        name: 'リーダーカード',
        hp: 1234,
        atk: 234,
        def: 123,
        evolution: 3,
        attributes: {
            "火": 100,
            "水": 50,
            "風": 60,
            "土": 75,
            "光": 80,
            "闇": 90,
        }
    };

    const attributeMaxValues: { [key: string]: number } = {
        "火": 120,
        "水": 80,
        "風": 100,
        "土": 90,
        "光": 110,
        "闇": 130,
    };

    const attributeColorMap = {
        "火": "#FF5733",  // 赤
        "水": "#3399FF",  // 青
        "風": "#33FF99",  // 緑
        "土": "#B45F04",  // 茶色
        "光": "#FFD700",  // 黄
        "闇": "#4B0082",  // 紫
    };

    // スタイルオブジェクト
    const containerStyle = {
        display: 'flex',
        backgroundImage: 'url("/images/121219139_p2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        gap: '10px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10px',
        height: '100vh', // 画面全体の高さを確保
    };

    const leaderCardStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    };

    const leaderCardImageStyle = {
        width: '200px',
        height: '300px',
        borderRadius: '8px',
        backgroundColor: '#f1f1f1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        marginRight: '20px',  // 画像とテキストを分けるスペース
        border: '2px solid #ccc', // グレーの枠を追加
    };

    const leaderCardInfoStyle = {
        display: 'flex',
        gap: '5px',
        flexDirection: 'column',
        marginLeft: '20px',
        border: '2px solid #333',
        padding: '5px',
        backgroundColor: 'rgba(240, 240, 240, 0.8)',
    };

    const infoItemStyle = {
        fontSize: '16px',
        padding: '5px',
        border: '1px solid #333', // 枠を追加
        borderRadius: '4px',
    };

    const infoRowStyle = {
        display: 'flex',
        gap: '10px',
        justifyContent: 'space-between',
    };

    const attributesStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        fontSize: '14px',
        height: '100%', // 属性部分も高さを制限して収める
    };

    const attributeItemStyle = {
        display: 'flex',
        width: '100%',
        padding: '5px',
        border: '1px solid #333',
        borderRadius: '4px',
        justifyContent: 'space-between', // 属性名と数値を両端に配置
    };

    const cardStyle = {
        width: '100px',
        height: '150px',
        border: '2px solid #333',
        borderRadius: '8px',
        backgroundColor: '#f1f1f1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        cursor: 'pointer', // カードをクリックできるように
    };

    const deckStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
    };

    const cardListContainerStyle = {
        width: '60%', // 画面の60%に配置
        border: '2px solid #333',
        borderRadius: '8px',
        backgroundColor: 'rgba(240, 240, 240, 0.8)',
        padding: '10px',
        overflowY: 'auto', // 縦スクロール可能に
        height: '400px', // 固定高さでスクロール
    };

    const cardListStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
    };

    const cardDetailContainerStyle = {
        width: '40%', // 画面の40%に配置
        gap: '10px',
        border: '2px solid #333',
        borderRadius: '8px',
        backgroundColor: 'rgba(240, 240, 240, 0.8)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '400px', // 固定高さ
    };

    const cardDisplayStyle = {
        display: 'flex',
        gap: '10px',
        alignItems: 'center', // カードとカード名を横並びに
    };

    const effectFrameStyle = {
        padding: '10px',
        border: '1px solid #333',
        borderRadius: '8px',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%', // 残りの領域全てを使う
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
    };

    // カードを選択したときに詳細を表示
    const handleCardClick = (index: number) => {
        setSelectedCard(index); // 選択したカードのインデックスを保存
    };

    const progressBarStyle = {
        width: '100%',
        height: '20px',
        borderRadius: '4px',
        backgroundColor: '#f0f0f0', // 背景色
    };

    const progressFillStyle = (attribute: keyof typeof attributeMaxValues, value: number) => {
        const max = attributeMaxValues[attribute]; // 属性ごとの最大値を取得
        const fillPercentage = Math.min((value / max) * 100, 100); // 満たしている割合

        const baseColor = attributeColorMap[attribute]; // 属性ごとの色を取得
        const filledColor = baseColor; // 濃い色（進行した部分）
        const emptyColor = `${baseColor}80`; // 薄い色（進行していない部分）

        // filledColor部分とemptyColor部分をlinear-gradientで組み合わせ
        return {
            height: '100%',
            borderRadius: '4px',
            background: `linear-gradient(to right, ${filledColor} ${fillPercentage}%, ${emptyColor} ${fillPercentage}%)`,
            width: '100%',
        };
    };

    return (
        <div style={containerStyle}>
            
            {/* リーダーカードの枠 */}
            <div style={leaderCardStyle}>
                {/* リーダーカードの画像 */}
                <div style={leaderCardImageStyle}>
                    {leaderCard.name}
                </div>

                {/* リーダーカードの詳細情報 */}
                <div style={leaderCardInfoStyle}>
                    {/* HP, ATK, DEF, 進化の横並び */}
                    <div style={infoItemStyle}>カード名: {leaderCard.name}</div>
                    <div style={infoRowStyle}>
                        <div style={infoItemStyle}>HP: {leaderCard.hp}</div>
                        <div style={infoItemStyle}>ATK: {leaderCard.atk}</div>
                        <div style={infoItemStyle}>DEF: {leaderCard.def}</div>
                        <div style={infoItemStyle}>進化: {leaderCard.evolution} 段階</div>
                    </div>

                    {/* 属性の縦並び */}
                    <div style={attributesStyle}>
                        {Object.keys(leaderCard.attributes).map((attribute) => {
                            const value = leaderCard.attributes[attribute];
                            return (
                                <div key={attribute} style={attributeItemStyle}>
                                    <div>{attribute.toUpperCase()}:</div>
                                    <div style={progressBarStyle}>
                                        <div style={progressFillStyle(attribute, value)}/>
                                    </div>
                                    <div style={{
                                        width: '80px',
                                        textAlign: "center"
                                    }}>{value} / {attributeMaxValues[attribute]}</div>
                                    {/* 属性ごとの値と上限を表示 */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* カードのデッキエリア */}
            <div style={deckStyle}>
                {deck.map((card, index) => (
                    <div key={index} style={cardStyle}>
                        {card !== null ? `カード ${card + 1}` : 'デッキスロット'}
                    </div>
                ))}
            </div>

            {/* 横並びの所持カードリストとカードの詳細情報エリア */}
            <div style={{display: 'flex', width: '100%', gap: '10px'}}>
                {/* 所持しているカードリスト */}
                <div style={cardListContainerStyle}>
                    <h3>所持カードリスト</h3>
                    <div style={cardListStyle}>
                        {Array(50).fill().map((_, index) => (
                            <div
                                key={index}
                                style={cardStyle}
                                onClick={() => handleCardClick(index)}
                            >
                                所持カード {index + 1}
                            </div>
                        ))}
                    </div>
                </div>

                {/* カードの詳細情報エリア */}
                <div style={cardDetailContainerStyle}>
                    {/* カード名とカード */}
                    <div style={cardDisplayStyle}>
                        <div style={cardStyle}>
                            {selectedCard !== null ? `所持カード ${selectedCard + 1}` : 'カードを選択してください'}
                        </div>
                        {selectedCard !== null && (
                            <div style={{fontSize: '18px'}}>
                                所持カード {selectedCard + 1}
                            </div>
                        )}
                    </div>

                    {/* 効果の枠（残りの領域全て） */}
                    <div style={effectFrameStyle}>
                        {selectedCard !== null ? `カード ${selectedCard + 1}の効果` : 'カードの効果を表示'}
                    </div>
                </div>
            </div>
        </div>
    );
}
