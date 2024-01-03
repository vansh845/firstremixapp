import { useMatches } from "@remix-run/react";

export default function Inbox() {
    const matches = useMatches();
    const currentPath = matches.pop()?.pathname.split('/').pop();
    const prevPath = matches.pop()?.pathname.split('/').pop();
    return (
        <div>
            <h1>{`${prevPath} > ${currentPath}`}</h1>
            <div>

            </div>
        </div>
    )
}