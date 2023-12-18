import { useLoaderData } from "@remix-run/react"
import { Card, CardHeader, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { useSearchParams } from "@remix-run/react"

export const loader = async ({ params }: { params: { next: string } }) => {
    const d = [
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
    return params.next
}
export default function NextRoute() {
    const l = useLoaderData<typeof loader>();
    const [params] = useSearchParams();
    return (

        <section className="w-3/4 p-4 overflow-y-auto">
            <header className="mb-6">
                <h1 className="text-2xl font-bold">{l}</h1>
            </header>
            <Card className="p-4">
                <CardHeader className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold">Hello, how are you?</h2>
                        <p className="text-gray-500 dark:text-gray-400">{params.get('q')}</p>
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
    )
}