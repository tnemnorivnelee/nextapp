export default function Read(props : {params : {id: string}}) {
    return(
        <div>
            <h2>Read</h2>
            parameters : {props.params.id}
        </div>
    )
}