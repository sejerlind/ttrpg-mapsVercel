'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const OrderBtn = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleClickNext = (newOrder) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('order', newOrder);
        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <>
            <button onClick={() => handleClickNext('created_at')}>
                Time Created
            </button>
            <button onClick={() => handleClickNext('title')}>
                Title
            </button>
            <button onClick={() => handleClickNext('rating')}>
                Rating
            </button>
        </>
    );
};

export default OrderBtn;
