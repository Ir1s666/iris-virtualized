import React, { useMemo, useRef } from 'react';
import { useMaxHeight, useScroll, useItemIndex, useVirtualItem, useUpdateWhileItemsChange, useHandleScrollMax } from './hooks';

interface VirtualScrollProps {
    contentHeight: number;
    itemHeight: number
    items: React.ReactNode[];
    onScrollMax?: () => void
}

const VirtualScroll: React.FC<VirtualScrollProps> = (props) => {
    const {
        contentHeight,
        itemHeight,
        items,
        onScrollMax = () => {}
    } = props;
    // --------- hooks ---------
    const scrollRef = useRef<HTMLDivElement>(null);
    const itemsLength = useMemo(() => {
        return items?.length || 0
    }, [items.length])
    useUpdateWhileItemsChange(itemsLength);
    const maxHeight = useMaxHeight({ itemHeight, itemsLength });
    const { scrollTop, hasScrolledToMax } = useScroll(scrollRef, contentHeight, maxHeight);
    useHandleScrollMax(onScrollMax, hasScrolledToMax)
    const itemIndex = useItemIndex({ scrollTop, itemHeight, contentHeight });
    const virtualItem = useVirtualItem(items, itemHeight, itemIndex);

    // --------- logic ---------

    return (
        <div
            className='v-wrapper'
            ref={scrollRef}
            style={{
                maxHeight: contentHeight,
                overflow: 'auto',
            }}
        >
            <div
                className='v-scroller'
                style={{
                    height: maxHeight,
                    position: 'relative'
                }}
            >
                {virtualItem}
            </div>
        </div>
    )
}

export default VirtualScroll