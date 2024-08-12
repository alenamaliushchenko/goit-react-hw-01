import styles from "./Profile.module.css";

const Profile = ({image, name, tag, location, stats}) => {
return (
    <div className={styles.profileContainer}>
        <div className={styles.mainContainer}>
            <img src={image} alt={name} className={styles.profileImage} />
            <h2 className={styles.profileName}>{name}</h2>
            <p className={styles.profileInfo}>@{tag}</p>
            <p className={styles.profileInfo}>{location}</p>
        </div>
        <div className={styles.statsContainer}>
            <ul className={styles.statsList}>
                <li className={styles.statsItem}>
                    <span className={styles.statsLabel}>Followers</span>
                    <span className={styles.statsValue}>{stats.followers}</span>       
                </li>
                <li className={styles.statsItem}>
                    <span className={styles.statsLabel}>Views</span>
                    <span className={styles.statsValue}>{stats.views}</span>  
                </li>
                <li className={styles.statsItem}>
                    <span className={styles.statsLabel}>Likes</span>
                    <span className={styles.statsValue}>{stats.likes}</span> 
                </li>
            </ul>
        </div>
    </div>
);
};
export default Profile;
