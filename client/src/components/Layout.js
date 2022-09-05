import Balance from "./Balance";
import Transactions from "./Transactions/Transactions";
import Form from "../components/Form";

export default function Layout({ children }) {
    return (
        <div className="App">
            <div className="main">
                <div className="container">
                    <Balance />
                    <Form />
                    <Transactions />
                </div>
            </div>
        </div>
    );
}
