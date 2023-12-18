import { Outlet } from "@remix-run/react"

export default function State(){
    return (
        <>
        <h3>State</h3>
        <Outlet/>
        </>
    )
}