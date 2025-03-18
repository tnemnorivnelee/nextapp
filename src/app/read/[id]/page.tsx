export default async function Read(props : {params : {id: string}}) {

    const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`);

    const topic = await resp.json();


    return(
        <div>
            <h2>{topic.title}</h2>
            {topic.body}
        </div>
    )
}