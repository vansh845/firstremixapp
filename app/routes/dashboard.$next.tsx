import { useLoaderData } from "@remix-run/react"

export const loader = async ({params}:{params:{next:string}}) => {
    return params.next
}
export default function NextRoute(){
    const l = useLoaderData<typeof loader>()
    return <h3>{l}</h3>
}