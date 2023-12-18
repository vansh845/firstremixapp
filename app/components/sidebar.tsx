import { Button } from "./ui/button"
import { Card, CardHeader } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"
import { useLoaderData } from "@remix-run/react"

type proptype = {
  name:string
  email:string
  subject:string
  img:string
}[]


export default function Sidebar({data}:{data:proptype}) {
  return (
    <aside className="w-1/4 p-4 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
      <header className="mb-6">
        <Button className="w-full">Compose</Button>
      </header>
      <nav>
        <ul className="space-y-2">
          <li>
            <Button className="w-full justify-start" variant="ghost">
              <InboxIcon className="w-4 h-4 mr-2" />
              Inbox{"\n                      "}
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              <StarIcon className="w-4 h-4 mr-2" />
              Starred{"\n                      "}
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              <SendIcon className="w-4 h-4 mr-2" />
              Sent{"\n                      "}
            </Button>
          </li>
          <li>
            <Button className="w-full justify-start" variant="ghost">
              <TrashIcon className="w-4 h-4 mr-2" />
              Deleted{"\n                      "}
            </Button>
          </li>
        </ul>
      </nav>
      <section className="mt-8">
        <h2 className="font-semibold mb-4">Recent Emails</h2>
        <div className="space-y-2">
          {/*  */}
          {data.map((x) => (
            <Card key={x.name}>
              <CardHeader>
                <Avatar>
                  <AvatarImage className="mr-2" src={x.img} />
                </Avatar>
                <div>
                  <h3 className="font-semibold">{x.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{x.subject}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
          {/*  */}
          {/* <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage className="mr-2" src='' />
              </Avatar>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Hello, how are you?</p>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage className="mr-2" src="https://avatars.githubusercontent.com/u/124599?s=80&v=4" />
              </Avatar>
              <div>
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Project Update</p>
              </div>
            </CardHeader>
          </Card> */}
        </div>
      </section>
    </aside>
  )
}

//Icons

function InboxIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}


function SendIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function StarIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TrashIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
