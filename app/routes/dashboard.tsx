/**
 * v0 by Vercel.
 * @see https://v0.dev/t/83L7cFFS968
 */

import { CardHeader, Card, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import Sidebar from "~/components/sidebar"
import { useLoaderData } from "@remix-run/react"

export async function loader () {
  console.log('hi from loader')
  return [
    {
        "name":"Vansh Koul",
        "subject":"Hello, how are you?",
        "email":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl velit. Sed in sagittis purus. Cras hendrerit, massa nec aliquet efficitur, nunc ipsum tincidunt dolor, id eleifend justo neque a augue.",
        "img":"https://avatars.githubusercontent.com/u/124599?s=80&v=4"
    },
    {
        "name":"Jane Smith",
        "subject":"First Email",
        "email":"this is empty",
        "img":"https://avatars.githubusercontent.com/u/103567533?v=4"
    }
]
}
export default function Component() {
  const arr = useLoaderData<typeof loader>();
  return (
    <main className="flex h-screen">
      <Sidebar data={arr}/>
      <section className="w-3/4 p-4 overflow-y-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Email Content</h1>
        </header>
        <Card className="p-4">
          <CardHeader className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Hello, how are you?</h2>
              <p className="text-gray-500 dark:text-gray-400">{`John Doe <john.doe@example.com>`}</p>
            </div>
            <Badge>Unread</Badge>
          </CardHeader>
          <CardContent className="mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl velit. Sed in sagittis purus.
              Cras hendrerit, massa nec aliquet efficitur, nunc ipsum tincidunt dolor, id eleifend justo neque a augue.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

