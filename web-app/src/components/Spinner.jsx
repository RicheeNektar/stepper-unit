import {useState} from "preact/hooks";

export const Spinner = () => (
    <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
);