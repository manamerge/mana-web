import React from "react";

export default function SVGGrid({ columns = 4, svgs = [], gap = "15px" }) {
    const totalSlots = 28;

    const items = Array.from({ length: totalSlots }, (_, i) => svgs[i] || null);
    const styles = {
        wrapper: {
            width: "100%",
            display: "flex",
            justifyContent: "center"
        },
        grid: {
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`, // Dynamic columns
            gap: gap
        }
        // cell: {
        //     width: "56px",
        //     height: "56px",
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     border: "1px solid #e5e7eb",
        //     borderRadius: "12px",
        //     boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        //     backgroundColor: "#ffffff30"
        // },
        // svgContainer: {
        //     width: "48px",
        //     height: "48px",
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center"
        // },
        // placeholder: {
        //     fontSize: "12px",
        //     color: "#9ca3af"
        // }
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.grid}>
                {items.map((svg, index) => (
                    <div key={index} style={styles.cell}>
                        {svg && <div style={styles.svgContainer}>{svg}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
