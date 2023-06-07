import { useEffect, useRef } from "react";

const useHandleScrollMax = (onScrollMax: () => void, hasScrolledToMax: boolean) => {
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        } else {
            hasScrolledToMax && onScrollMax?.();
        }
    }, [hasScrolledToMax])
}

export default useHandleScrollMax;