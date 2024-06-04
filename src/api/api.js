//const BASE_URL = 'http://localhost:8083/fhem';
const BASE_URL = '/api/fhem';

const fetchData = async () => {
    try {
        //TODO: https://wiki.fhem.de/wiki/CsrfToken-HowTo
        const response = await fetch(`${BASE_URL}?fw_id=1717437600.69312&fwcsrf=csrf_211079456867366&cmd=jsonlist&XHR=1`, {
            //mode: 'no-cors',
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("error with response: " + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("error fetching data: " + error);
        throw error;
    }
};

export default {
    fetchData,
}
