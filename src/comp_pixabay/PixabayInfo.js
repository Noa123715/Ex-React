import React from "react";

export default function PixabayInfo(props) {
    let items = props.items;

    return (
        <div className="row mt-4">
            {items.length > 0 ? (
                items.map((img, i) => (
                    <div key={i} className="col-md-3 col-sm-6 mb-4 d-flex">
                        <div className="card shadow-sm w-100">
                            <div
                                style={{ height: "200px", overflow: "hidden" }}
                                className="d-flex align-items-center justify-content-center"
                            >
                                <img
                                    src={img.webformatURL}
                                    alt={img.tags}
                                    className="card-img-top"
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text text-truncate m-0">
                                    <b>{img.user}</b>
                                </p>
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
    );
}
