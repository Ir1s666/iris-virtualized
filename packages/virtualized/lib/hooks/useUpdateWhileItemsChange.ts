import { useState, useEffect } from "react";

const useUpdateWhileItemsChange = (length: number) => {
    const [_, forceUpdate] = useState({});

    useEffect(() => {
        forceUpdate({})
    }, [length])
};

export default useUpdateWhileItemsChange;

