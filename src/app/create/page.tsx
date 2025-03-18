"use client";


import {useRouter} from "next/navigation";

export default function Create() {

    const router = useRouter();

    return (
        <form action="" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const form = e.currentTarget;

            const titleInput = form.elements.namedItem('title') as HTMLInputElement;
            const bodyInput = form.elements.namedItem('body') as HTMLInputElement;

            const title = titleInput.value;
            const body = bodyInput.value;

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({title, body}),
            }

            fetch(`http://localhost:9999/topics`, options)
                .then((res) => {
                    return res.json();
                }).then((result) => {
                    console.log(result);
                    const lastId = result.id;
                    router.push(`/read/${lastId}`);
                    router.refresh();
            });
        }}>
            <p>
                <input type="text" name="title" placeholder="Title" />
            </p>
            <p>
                <textarea name="body" placeholder="body"></textarea>
            </p>
            <p>
                <input type="submit" value="create" />
            </p>
        </form>
    )
}