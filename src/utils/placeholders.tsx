import React from 'react';

export interface PlaceholderImageProps {
    width: number;
    height: number;
    text?: string;
    bgColor?: string;
    textColor?: string;
    className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
    width,
    height,
    text = '',
    bgColor = '#222230',
    textColor = '#ffffff',
    className = ''
}) => {
    return (
        <div
            className={`flex items-center justify-center overflow-hidden ${className}`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: bgColor,
                color: textColor,
                fontSize: '14px',
                fontWeight: 500,
                textAlign: 'center',
                borderRadius: '4px',
                padding: '1rem'
            }}
        >
            {text}
        </div>
    );
};

export default PlaceholderImage;
