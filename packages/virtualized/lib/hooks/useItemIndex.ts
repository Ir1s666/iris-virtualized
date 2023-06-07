const useItemIndex: (p: { scrollTop: number, itemHeight: number, contentHeight: number }) => ({ startIndex: number, endIndex: number }) = (p) => {
    const {
        scrollTop,
        itemHeight,
        contentHeight
    } = p;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.floor((scrollTop + contentHeight) / itemHeight);

    return {
        startIndex,
        endIndex
    }
}

export default useItemIndex;