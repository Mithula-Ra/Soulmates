import React from 'react';

interface ContainerProps {
    percentageX: number; // Accept a percentage for width
    percentageY?: number; // Accept a percentage for height (optional)
    children?: React.ReactNode; // Allow optional children
}

const Container: React.FC<ContainerProps> = ({ percentageX, percentageY = 100, children }) => {
    return (
        <div className="w-full h-full">
            <div
                className="mx-auto h-full"
                style={{ width: `${percentageX}%`, height: `${percentageY}%` }}
            >
                {children}
            </div>
        </div>
    );
};

export default Container;
