import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AtlasInfo from './AtlasInfo';
import AtlasInput from './AtlasInput';

export default function AppAtlas() {
    const [infoItem, setInfoItem] = useState({});

    useEffect(() => {
        doApi("israel")
    }, [])

    const doApi = async (_country) => {
        setInfoItem({});
        let url = "https://restcountries.com/v3.1/name/" + _country;
        try {
            let resp = await axios.get(url);
            console.log(resp.data)
            setInfoItem(resp.data[0]);
        }
        catch (err) {
            console.log(err);
            alert("There problem, come back later")
        }
    }

    const doApiCountryCode = async (_countryCode) => {
        setInfoItem({});
        let url = "https://restcountries.com/v3.1/alpha/" + _countryCode;
        try {
            let resp = await axios.get(url);
            console.log(resp.data)
            setInfoItem(resp.data[0]);
        }
        catch (err) {
            console.log(err);
            alert("There problem, come back later")
        }
    }

    return (
        <div className='container'>
            <h2>Atlas app</h2>
            <AtlasInput doApi={doApi} />
            <AtlasInfo item={infoItem} doApiCountryCode={doApiCountryCode} />
        </div>
    )
}