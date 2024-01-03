import type {
    ActionFunctionArgs,
    LoaderFunctionArgs,
} from "@remix-run/node"; // or cloudflare/deno
import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { useFetcher } from "@remix-run/react";


import { getSession, commitSession } from "../session";

// export async function loader({
//     request,
// }: LoaderFunctionArgs) {
//     const session = await getSession(
//         request.headers.get("Cookie")
//     );

//     if (session.has("userId")) {
//         // Redirect to the home page if they are already signed in.
//         return redirect("/");
//     }

//     const data = { error: session.get("error") };

//     return json(data, {
//         headers: {
//             "Set-Cookie": await commitSession(session),
//         },
//     });
// }

// export async function action({ request, }: ActionFunctionArgs) {
//     const session = await getSession(
//         request.headers.get("Cookie")
//     );
//     const form = await request.formData();
//     const username = form.get("username");
//     const password = form.get("password");

//     const userId = 'c33f43';

//     if (userId == null) {
//         session.flash("error", "Invalid username/password");

//         // Redirect back to the login page with errors.
//         return redirect("/login", {
//             headers: {
//                 "Set-Cookie": await commitSession(session),
//             },
//         });
//     }

//     session.set("userId", userId);

//     // Login succeeded, send them to the home page.
//     // return redirect("/", {
//     //     headers: {
//     //         "Set-Cookie": await commitSession(session),
//     //     },
//     // });
//     return json({ message: 'hi', success: true })
// }

// export async function loader({ request }: LoaderFunctionArgs) {
//     // console.log(request);
//     return json({ message: 'hi', success: true });
// }

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    formData.forEach((value, key) => {
        console.log(key, value);
    });
    return json({ message: 'hi', success: true });
}

export default function Login() {
    // const actionData = useActionData<typeof action>();
    const fetcher = useFetcher();
    return (
        <div>
            <fetcher.Form method="post">
                <div>
                    <label htmlFor="username">Username : </label>
                    <input className="border-2 border-black" id="username" name="username" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password : </label>
                    <input className="border-2 border-black" id="password" name="password" type="text" />
                </div>
                <button className="border-black border-2 bg-gray-400" type="submit">Login</button>
            </fetcher.Form>
        </div>
    )
}
