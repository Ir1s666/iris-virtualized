import { cloneElement } from "react";

const defaultBuffer = 5;

const useVirtualItem: (items: React.ReactNode[], itemHeight: number, itemIndex: {
    startIndex: number;
    endIndex: number;
}) => React.ReactNode[] = (items, itemHeight, itemIndex) => {
    const end = itemIndex.endIndex + defaultBuffer > items.length ? items.length : itemIndex.endIndex + defaultBuffer
    const sliced = items?.slice(itemIndex.startIndex, end);
    return sliced.map((c, i) => {
        const index = itemIndex.startIndex + i;
        return cloneElement(c as React.ReactElement, {
            key:index,
            className: `v-item-wrapper-${index} v-item-wrapper`,
            style: {
                height: itemHeight,
                top: index * itemHeight,
                position: 'absolute',
                width: '100%',
            }
        })
    });
}

export default useVirtualItem