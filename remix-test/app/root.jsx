import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
} from "@remix-run/react";
import { useState } from "react";

export default function App() {

    const [state, setState] = useState(0)

    return (
        <html>
            <head>
                <link
                    rel="icon"
                    href="data:image/x-icon;base64,AA"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <h1>Hello Remix world</h1>
                <Outlet />
                <button onClick={() => setState(prev => prev + 1)}>Count {state}</button>
                <LiveReload />
                <Scripts />
            </body>
        </html>
    );
}
