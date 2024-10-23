
const getStarFill = (index: number, rating: number) => {
    if (index < Math.floor(rating)) {
        return 'yellow';
    } else if (index < rating) {
        return 'url(#half)';  // Referencia al linearGradient para la mitad
    } else {
        return 'gray';
    }
};

interface StarProps {
    number: number;
}

export const Star = ({ number }: StarProps) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill={getStarFill(index, number)}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
        >
            <defs>
                <linearGradient id="half" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" style={{ stopColor: 'yellow', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: 'gray', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
        </svg>
    ));

    return <section className="flex flex-row">{stars}</section>;
};



