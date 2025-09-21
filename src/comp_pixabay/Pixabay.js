import axios from "axios";
import React, { useEffect, useState } from "react";
import PixabayInput from "./PixabayInput";
import PixabayInfo from "./PixabayInfo";


export default function Pixabay() {
    const [images, setImages] = useState([]);
    const API_KEY = "52396434-a0a9f47416b3fd271f18a353d";

    useEffect(() => {
        doApi("snow");
    }, []);

    const doApi = async (_searchQ) => {
        setImages([]);
        let url = `https://pixabay.com/api/?key=${API_KEY}&q=${_searchQ}&image_type=photo&per_page=20`;
        try {
            let resp = await axios.get(url);
            console.log(resp.data.hits);
            setImages(resp.data.hits);
        } catch (err) {
            console.log(err);
            alert("There was a problem, try again later");
        }
    };

    return (
        <div className="container">
            <h2 className="text-center mt-3">Pixabay Gallery</h2>
            <PixabayInput doApi={doApi} />
            <PixabayInfo items={images} />
        </div>
    );
}
