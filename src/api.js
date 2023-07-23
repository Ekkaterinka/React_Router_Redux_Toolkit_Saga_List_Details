export const list = async () => {
    const response = await
        fetch(`${import.meta.env.VITE_APP_LIST_URL}`);
    console.log(import.meta.env.VITE_APP_LIST_URL)
    if (!response.ok) {
        throw new
            Error(response.statusText);
    }
    return await response.json();
}


export const details = async (id) => {
    const response = await
        fetch(`${import.meta.env.VITE_APP_LIST_URL}/${id}`);
    console.log(`${import.meta.env.VITE_APP_LIST_URL}/${id}`)
    if (!response.ok) {
        throw new
            Error(response.statusText);

    }
    return await response.json();
}


