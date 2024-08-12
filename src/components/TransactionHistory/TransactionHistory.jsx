import styles from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {items.map(({id, type, amount, currency}) =>
                <tr key={id}>                   
                    <th>{type}</th>
                    <th>{amount}</th>
                    <th>{currency}</th>
                </tr>
        )}    
            </tbody>
        </table>
    );
};


export default TransactionHistory;