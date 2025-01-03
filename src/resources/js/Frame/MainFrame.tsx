import React, { ReactNode } from 'react';
import FooterFrame from "@/Frame/FooterFrame";

interface MainFrameProps {
    children: ReactNode; // 子コンポーネントを受け取るための型
    onBack: () => void; // 戻るボタンの動作を親から受け取るための型
}

export default function MainFrame({ children, onBack }: MainFrameProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh', // 画面全体の高さを確保
            }}
        >
            {children}
        </div>
    );
}
