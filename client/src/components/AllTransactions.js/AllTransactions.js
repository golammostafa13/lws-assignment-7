import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import Transaction from "../Transactions/Transaction";
import { useEffect } from "react";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Paginations from "../ui/Paginations";

export default function AllTransactions() {

    const { transactions, isLoading, isError, filterType, searched, pageNo } = useSelector(
        (state) => state.transaction
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    
    const filterByIncomeExpense = (transaction) => {
        if(filterType === "all")return true;
        else if(filterType === transaction.type) return true;
        return false;
    }

    const filterBySearch = (transaction) => {
        if(!searched)return true;
        else if(searched.toLowerCase() === transaction.name.toLowerCase())return true;
        return false;
    }  

    const filterByPageNo = (transaction,idx) => {
        return  ((10*(pageNo-1) -1) < idx) && (idx < (10*pageNo));
    }
    
    const filteredTransactions = transactions.filter(filterByIncomeExpense).filter(filterBySearch).filter(filterByPageNo);
    const filterForPage = transactions.filter(filterByIncomeExpense).filter(filterBySearch);

    // decide what to render
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && transactions?.length > 0) {
        content = filteredTransactions.map((transaction, idx) => (
            <Transaction key={transaction.id} slNo={idx+1} transaction={transaction} />
        ));
    }

    if (!isLoading && !isError && transactions?.length === 0) {
        content = <p>No transactions found!</p>;
    }

    return (
        <>
            <div className="transactions">
                <Form />
                <p className="second_heading">Your Transactions:</p>
                <div className="conatiner_of_list_of_transactions">
                    <ul>{content}</ul>
                </div>
            </div>
            <Paginations transactions={filterForPage} />
        </>
    );
}
