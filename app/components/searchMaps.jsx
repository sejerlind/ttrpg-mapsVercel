'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from "react";

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [page, setPage] = useState(1); // Initialize page state with 10
    const buttonRef = useRef(null);
    const lastExecutionRef = useRef(0);

    const handleClickNext = () => {
        const currentTime = Date.now();
        if (currentTime - lastExecutionRef.current >= 100) { // 2000ms = 2 seconds
            lastExecutionRef.current = currentTime;
            const newPage = page + 1;
            setPage(newPage);
            updatePageInUrl(newPage);
        }
    };

    const updatePageInUrl = (newPage) => {
        const params = new URLSearchParams(searchParams);
        params.set('limt', newPage);
        replace(`${pathname}?${params.toString()}`);
    };

    useEffect(() => {
        // Check if 'limt' parameter is present
        if (!searchParams.get('limt')) {
            // If not, set the default 'limt' to 10
            updatePageInUrl(1);
        }
    }, [searchParams, pathname, replace]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        handleClickNext();
                    }
                });
            },
            { threshold: 1.0 }
        );

        if (buttonRef.current) {
            observer.observe(buttonRef.current);
        }

        return () => {
            if (buttonRef.current) {
                observer.unobserve(buttonRef.current);
            }
        };
    }, [page]);

    return (
        <>
            <button ref={buttonRef} onClick={handleClickNext}>Next</button>
        </>
    );
}
