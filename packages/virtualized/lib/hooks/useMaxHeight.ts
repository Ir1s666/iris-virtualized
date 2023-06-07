import { useMemo } from "react";
const useMaxHeight: (p: { itemHeight: number, itemsLength: number }) => number = ({itemHeight, itemsLength}) => {
    const maxHeight = useMemo(() => {
        return itemHeight * itemsLength;
    }, [itemHeight, itemsLength]);

    return maxHeight;
};

export default useMaxHeight;