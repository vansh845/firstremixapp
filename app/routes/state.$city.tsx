import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({params}:{params:{city:string}}){
    return params.city;
}

export default function Jammu(){
    const loaderData = useLoaderData<typeof loader>();
    return (
        <h2>{loaderData}</h2>
    )
}