import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export function Footer() {
    return(
        <div className="footer" style={{
            width: "100%",
            height: "60px",
            background: "#ccc",
            position: "fixed",
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
        }}>
            Made by @SaziX
        </div>
    )
}