import { useSyncExternalStore } from "react";
let hasScrolledToMax = false;

const useScroll = (ref: React.RefObject<HTMLDivElement>, contentHeight: number, maxHeight: number, dangerHeight = 300) => {
    const { current } = ref;
    const subscribeScroll = (onStateChange: () => void) => {
        const handleScroll = () => {
            onStateChange();
            hasScrolledToMax = (current?.scrollTop || 0) + contentHeight + dangerHeight >= maxHeight;
        };

        ref.current?.addEventListener('scroll', handleScroll);

        return () => ref.current?.removeEventListener('scroll', handleScroll);
    };

    const getScrollTop = () => current?.scrollTop || 0;

    return {
        scrollTop: useSyncExternalStore(subscribeScroll, getScrollTop),
        hasScrolledToMax
    };
};

export default useScroll;