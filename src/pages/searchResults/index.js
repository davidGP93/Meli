import React, { useEffect, useState } from 'react';

import { ServiceFactory } from "../../controllers/ServiceFactory";
import { getRequest } from "../../controllers/ServiceInteractor";

import View from "./view";

export default function Index() {
    const [ listArts, setListArts ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ breadCrumb, setBreadCrumb ] = useState('');
    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const queryUrl = urlParams.get('search');
        const { serverUrl, apiUrlSites ,routes } = ServiceFactory;
        const url = `${serverUrl}${apiUrlSites}${routes.search}?q=${queryUrl}`;
        
        getRequest(url)
        .then((data) => {
            let breads = data.filters[0].values[0].path_from_root;
            console.info(breads);
            setBreadCrumb(breads);
            setListArts(data.results.splice(0, 4))
            setLoading(false);
        })
        .catch((err) => {
            console.info(err);
        })
    }, [])

    return (
        <View 
            listArts={listArts}
            loading={loading}
            breadCrumb={breadCrumb}
        />
    )
}
