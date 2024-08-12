import styles from './FriendList.module.css';
const FriendList = ({ friends }) => {
return (
    <div className={styles.friendsContainer}>
        <ul className={styles.friendList}>
            {friends.map(({avatar, name, isOnline, id}) => (
                <li key={id}>
                <FriendListItem avatar={avatar} name={name} isOnline={isOnline}/>
            </li>
            ))}
        </ul>
    </div>
);
};
const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div className={styles.friendListItem}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={styles.friendName}>{name}</p>
        <p className={isOnline ? styles.isOnline : styles.isOffline }>
            {isOnline ? "isOnline" : "isOffline"}
        </p>
    </div>
  );
};


  export default FriendList;