import { useEffect, useRef } from "react"

// Implemnetation - 1 : useDebounce
// export const useDebounce = (originalFn) => {
//     const currentClock = useRef();
//     const fn = () => {
//         clearTimeout(currentClock.current);
//         currentClock.current = setTimeout(originalFn , 200);
//     }
//     return fn;
// }

// Implementation - 2: useDebounce: A more generalised Implementation
export const useDebounce = (value , delay) => {
    const [debouncedVal , setDebouncedVal] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedVal(value)
        } , delay)

        return () => {
            clearTimeout(handler);
        }
    } , [value , delay])
}