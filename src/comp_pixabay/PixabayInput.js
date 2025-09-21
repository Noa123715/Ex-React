import React, { useRef } from "react";

export default function PixabayInput(props) {
    const inputRef = useRef();

    const onSearchClick = () => {
        props.doApi(inputRef.current.value);
    };

    return (
        <div className="bg-warning p-2">
            <div className="col-md-6 d-flex mx-auto">
                <input
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            props.doApi(inputRef.current.value);
                        }
                    }}
                    ref={inputRef}
                    placeholder="Search for images..."
                    type="text"
                    className="form-control"
                />
                <button onClick={onSearchClick} className="btn btn-info ms-2">
                    Search
                </button>
            </div>
        </div>
    );
}
