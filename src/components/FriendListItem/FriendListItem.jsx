import css from './FriendListItem.module.css'

export default function FriendListItem ({}) {
    return (
        <div className={css.itemContainer}>
            <img src={avatar} alt="Avatar" width="48" className={css.avatar}/>
            <p className={css.name}>Friend name</p>
            <p className={`${css.status}${isOnline ? css.online : css.offline}`}>
                {isOnline ? `Online` : `Offline`}
            </p>
        </div>
    )
}