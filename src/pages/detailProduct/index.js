import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ServiceFactory } from '../../controllers/ServiceFactory';
import { getRequest } from '../../controllers/ServiceInteractor';

import View from "./view";

export default function Index() {
    const [ dataProduct, setDataProduct ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState();
    const [currentImage, setCurrentImage] = useState(0);
    const { id } = useParams();
    
    useEffect(() => {
        async function getData() {
            try {
                const { serverUrl, routes } = ServiceFactory;
                const url = `${serverUrl}${routes.items}/${id}`;
                const urlDescription = `${serverUrl}${routes.items}/${id}${routes.description}`;
        
                const data = await getRequest(url);
                const description = await getRequest(urlDescription);
                
                data.description = description.plain_text;
    
                setDataProduct(data);
                setLoading(false);
                setError(null);
            } catch(error) {
                setLoading(false);
                setError(error);
            }
        }
        getData();
    }, []);

    const handleCurrentImage = (index) => {
        setCurrentImage(index)
    }
    

    return (
        <View 
            dataProduct={dataProduct}
            loading={loading}
            error={error}
            currentImage={currentImage}
            handleCurrentImage={handleCurrentImage}
        />
    )
}
