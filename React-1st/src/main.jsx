import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react"; 

const abc = React.createElement(
    'a',
    { href: 'https://google.com' },
    'visit google'
);

createRoot(document.getElementById("root")).render(
    <>
        <App />
        {abc}
    </>
);
