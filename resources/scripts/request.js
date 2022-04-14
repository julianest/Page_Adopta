export const getData = async (api) => {
    const respuesta = await fetch(api);
    const data = await respuesta.json();
    return data;
}

export const updateData = async (api, body) => {
    const dataRequest = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    const respuesta = await fetch(api, dataRequest);
    const data = await respuesta.json();
    return data;
}