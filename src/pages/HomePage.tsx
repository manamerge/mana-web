import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <div>HomePage</div>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <div>Visit components page:</div>
                <Link to="/test">components page</Link>
            </div>
        </div>
    );
}
