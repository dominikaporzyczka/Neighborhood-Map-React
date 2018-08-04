const clientId = "FSUFDN0KPLM5BVW3Q5PTPRYNBNW13PNSHAE33UM1S4XGKZHI";
const clientSecret = "2HMBVQVXDS05FEDUMD0KNQSH0PZMWRIIJACRYQO0RTRWX21V";
const apiUrl = "https://api.foursquare.com/v2/"
const urlCredentials = "client_id=" + clientId + "&client_secret=" + clientSecret + "&v=20180802";

export const getMarkerInfo = (marker) => {
    const url = `${apiUrl}venues/search?${urlCredentials}&limit=1&ll=${marker.lat},${marker.lng}&query=${marker.name}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.response.venues[0])
        .catch(error => console.error(error))
}