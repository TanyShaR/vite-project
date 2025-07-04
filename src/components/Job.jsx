export const Job = (props) => {
    return (
        <div>
        <div>
            <b>Beruflicher Werdegang:</b> {props.title}
        </div>
        <div>
            <b>Position:</b> {props.post}
        </div>
        <div>
            <b>Verantwortlichkeiten:</b> {props.description}
        </div>
        </div>
    );
}