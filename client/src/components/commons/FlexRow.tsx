type FlexRowProps = {
    alignItems?: 'align-start' | 'align-end' | 'align-center' | 'align-baseline' | 'align-stretch'; // Flex alignment
    justifyContent?: 'justify-start' | 'justify-end' | 'justify-center' | 'justify-between' | 'justify-around' | 'justify-evenly'; // Flex justification
    children?: React.ReactNode; // Allow nested children
};

const FlexRow: React.FC<FlexRowProps> = ({ alignItems = 'stretch', justifyContent = 'flex-start', children }) => {
    return (
        <div
            className="flex flex-row w-full h-full"
            style={{ alignItems, justifyContent }}
        >
            {children}
        </div>
    );
};

export default FlexRow;
