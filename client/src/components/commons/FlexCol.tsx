type FlexColProps = {
    alignItems?: 'align-start' | 'align-end' | 'align-center' | 'align-baseline' | 'align-stretch'; // Flex alignment
    justifyContent?: 'justify-start' | 'justify-end' | 'justify-center' | 'justify-between' | 'justify-around' | 'justify-evenly'; // Flex justification
    children?: React.ReactNode; // Allow nested children
};

const FlexCol: React.FC<FlexColProps> = ({ alignItems = 'center', justifyContent = 'flex-start', children }) => {
    return (
        <div
            className="flex flex-col w-full h-full"
            style={{ alignItems, justifyContent }}
        >
            {children}
        </div>
    );
};

export default FlexCol;
