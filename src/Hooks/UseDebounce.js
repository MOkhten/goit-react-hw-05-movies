import { useEffect, useRef, useState } from "react"

const useDebounce = (query, debounceTime) => {
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const timeoutRef = useRef(null);
    useEffect(() => {
        timeoutRef.current = (() => {
            setDebouncedQuery(query);
        }, debounceTime);
        return () => {
            clearTimeout(timeoutRef.current);
        }
    }, [query, debounceTime]);
    return debouncedQuery;
};

export default useDebounce;