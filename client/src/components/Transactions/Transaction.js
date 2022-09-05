import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import {
    editActive,
    removeTransaction,
    setSearched,
} from "../../features/transaction/transactionSlice";
import numberWithCommas from "../../utils/numberWithCommas";

export default function Transaction({ slNo, transaction }) {
    const { name, amount, type, id } = transaction || {};
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editActive(transaction));
        dispatch(setSearched(""));
    };

    const handleDelete = () => {
        dispatch(removeTransaction(id));
    };

    return (
        <li className={`transaction ${type}`}>
            <p>{slNo} {name}</p>
            <div className="right">
                <p>৳ {numberWithCommas(amount)}</p>
                <Link to="/"> 
                    <button className="link" onClick={handleEdit}>
                        <img alt="Edit" className="icon" src={editImage} />
                    </button>
                </Link>
                <button className="link" onClick={handleDelete}>
                    <img alt="Delete" className="icon" src={deleteImage} />
                </button>
            </div>
        </li>
    );
}
