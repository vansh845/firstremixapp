/**
 * v0 by Vercel.
 * @see https://v0.dev/t/83L7cFFS968
 */

import { CardHeader, Card, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import Sidebar from "~/components/sidebar"
import { useLoaderData } from "@remix-run/react"
import { Outlet } from "@remix-run/react"

export async function loader() {
  return [
    {
      "name": "Vansh Koul",
      "subject": "Hello, how are you?",
      "email": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl velit. Sed in sagittis purus. Cras hendrerit, massa nec aliquet efficitur, nunc ipsum tincidunt dolor, id eleifend justo neque a augue.",
      "img": "https://avatars.githubusercontent.com/u/124599?s=80&v=4"
    },
    {
      "name": "Jane Smith",
      "subject": "First Email",
      "email": "this is empty",
      "img": "https://avatars.githubusercontent.com/u/103567533?v=4"
    }
  ]
}
export default function Component() {
  const arr = useLoaderData<typeof loader>();
  return (

    <main className="flex h-screen">
      <Sidebar data={arr} />
      <Outlet />
    </main>
  )
}

