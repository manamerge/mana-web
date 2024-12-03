import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            404. Page not found... Go <Link to="/">Home</Link>;
        </div>
    );
}
