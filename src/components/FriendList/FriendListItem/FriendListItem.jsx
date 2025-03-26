import css from './FriendListItem.module.css'

export default function FriendListItem ({ avatar, name, isOnline, id }) {
    return (
        <div className={css.itemContainer}>
            <img src={avatar} alt="Avatar" width="48" className={css.avatar}/>
            <p className={css.name}>{name}</p>
            <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
                {isOnline ? `Online` : `Offline`}
            </p>
        </div>
    )
}