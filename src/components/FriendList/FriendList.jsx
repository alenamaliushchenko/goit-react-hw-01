import FriendListItem from '../FriendListItem/FriendListItem'
import css from './FriendList.module.css'


export default function FriendList () {
    return (
        <ul className={css.friendList}>
            <li className={css.friendListItem}>
                <FriendListItem />
            </li>
        </ul>
    )
}