export const fetchCards = async () => {
    const URL = `https://lab.lectrum.io/rtx/api/forecast`;

    const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error();
    }

    return response.json();
};