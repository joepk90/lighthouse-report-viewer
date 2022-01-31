async function importAll(r) {
    let data = {};
    r.keys().forEach((key) => {
        data[key] = r(key);
    });
    return data;
}

const getData = async () => {
    return await importAll(require.context('./../reports/', false, /\.json$/));
}

export default getData;