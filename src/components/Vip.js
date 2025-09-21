import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Vip() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        doApi();
    }, []);

    const doApi = async () => {
        let url = "https://expressrichpepole.onrender.com/";
        try {
            let resp = await axios.get(url);
            console.log(resp.data);
            setItems(resp.data);
        } catch (err) {
            console.log(err);
            alert("There was a problem loading VIP data");
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">VIP Members</h2>
            <div className="row">
                {items.length > 0 ? (
                    items.map((vip, i) => (
                        <div key={i} className="col-md-4 col-sm-6 mb-4 d-flex">
                            <div className="card shadow-sm w-100">
                                <div
                                    style={{ height: "200px", overflow: "hidden" }}
                                    className="d-flex align-items-center justify-content-center"
                                >
                                    <img
                                        src={vip.image}
                                        alt={vip.name}
                                        className="card-img-top"
                                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{vip.name}</h5>
                                    {vip.age && <p className="card-text">Age: {vip.age}</p>}
                                    {vip.country && (
                                        <p className="card-text">Country: {vip.country}</p>
                                    )}
                                    {vip.networth && (
                                        <p className="card-text">Net Worth: {vip.networth}</p>
                                    )}
                                    {vip.info && <p className="card-text">{vip.info}</p>}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div
                        style={{ width: "5rem", height: "5rem" }}
                        className="spinner-border text-primary mx-auto"
                        role="status"
                    >
                        <span className="sr-only"></span>
                    </div>
                )}
            </div>
        </div>
    );
}
