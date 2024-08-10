export default function Profile (props) {
    return (
        <div>
            <div>
               <img
                src={props.imageUrl}
                alt={props.name}
                />
                <p>{props.name}</p>
                <p>{props.tag}</p>
                <p>{props.location}</p>
            </div>
            <ul>
                <li>
                    <span>Followers</span>
                    <span>{props.stats}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{props.stats}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{props.stats}</span>
                </li>
            </ul>
        </div>

    )
}