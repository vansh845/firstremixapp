import { Button } from "./ui/button"
import { Card, CardHeader } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Link } from "@remix-run/react"
import { Input } from "./ui/input"
import { useSearchParams } from "@remix-run/react"
import React, { MouseEventHandler, useState } from "react"
type proptype = {
  name: string
  email: string
  subject: string
  img: string
}[]



export default function Sidebar({ data }: { data: proptype }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams();
  const [selected, setSelected] = useState('');

  const [styling, setStyling] = useState({
    inbox: "",
    sent: "",
    deleted: "",
    starred: ""
  })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setStyling({
      inbox: "",
      sent: "",
      deleted: "",
      starred: "",
      [e.currentTarget.value]: "bg-gray-200"
    })
  }

  return (
    <aside className="w-1/4 p-4 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
      <header className="mb-6 flex space-x-2">
        <Input value={searchParams.get('q') ?? undefined} type="text" placeholder="search" onClick={e => { params.set('q', ''); setSearchParams(params) }} onChange={e => {
          setSearchParams((prev) => {
            prev.set('q', e.target.value);
            return prev;
          })
        }} />
        <Button >search</Button>
      </header>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard/inbox">
              <Button className={`w-full justify-start hover:bg-gray-200 ${styling.inbox}`} value='inbox' variant="ghost" onClick={handleClick}>
                <InboxIcon className="w-4 h-4 mr-2" />
                Inbox{"\n                      "}
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/starred">
              <Button className={`w-full justify-start hover:bg-gray-200 ${styling.starred}`} value='starred' variant="ghost" onClick={handleClick}>
                <StarIcon className="w-4 h-4 mr-2" />
                Starred{"\n                      "}
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/sent">
              <Button className={`w-full justify-start hover:bg-gray-200 ${styling.sent}`} value='sent' variant="ghost" onClick={handleClick}>
                <SendIcon className="w-4 h-4 mr-2" />
                Sent{"\n                      "}
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/deleted">
              <Button className={`w-full justify-start hover:bg-gray-200 ${styling.deleted}`} value='deleted' variant="ghost" onClick={handleClick}>
                <TrashIcon className="w-4 h-4 mr-2" />
                Deleted{"\n                      "}
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      <section className="mt-8">
        <h2 className="font-semibold mb-4">Recent Emails</h2>
        <div className="space-y-2 flex flex-col">
          {/*  */}
          {data.map((x, i) => (
            <button key={i} className="hover:shadow-md hover:rounded-xl duration-300">
              <Card >
                <CardHeader>
                  <Avatar>
                    <AvatarImage src={x.img} />
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{x.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{x.subject}</p>
                  </div>
                </CardHeader>
              </Card>
            </button>
          ))}
          {/*  */}

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
