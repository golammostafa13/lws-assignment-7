import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
    const dispatch = useDispatch();

    const { transactions, isLoading, isError } = useSelector(
        (state) => state.transaction
    );
    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    // decide what to render
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && transactions?.length > 0) {
        content = transactions.map((transaction, idx) => (
            idx < 5 && <Transaction key={transaction.id} slNo={idx+1} transaction={transaction} />
        ));
    }

    if (!isLoading && !isError && transactions?.length === 0) {
        content = <p>No transactions found!</p>;
    }

    return (
        <div className="container">
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>
            </div>
            { transactions.length > 5 && <Link style={{textDecoration: "none"}} to="/transactions"> <button className="btn">View All</button> </Link>}
        </div>
    );
}
