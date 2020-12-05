const ServiceFactory = {
    serverUrl: 'https://api.mercadolibre.com', //Esto por lo general va en variables de entorno,
    apiUrlSites: '/sites/MLA',
    routes: {
        search: '/search',
        items: '/items',
        description: '/description'
    }
}

export {
    ServiceFactory
}