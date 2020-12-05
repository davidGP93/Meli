import React, { useState, useEffect } from 'react';
import View from "./view";

import { useHistory } from "react-router-dom";

export default function Index() {
    const [query, setQuery] = useState('');
    let history = useHistory();
    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const queryUrl = urlParams.get('search');
        if(queryUrl) {
            setQuery(queryUrl);
        }
    }, [])

    function handleSearchProducts () {
        history.push(`/items?search=${query}`);
        window.location.reload()
    }
    return (
        <View 
            handleSearchProducts={handleSearchProducts}
            setQuery={setQuery}
            query={query}
        />
    )
}
