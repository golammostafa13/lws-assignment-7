import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setFilterType, setPageNo, setSearched } from '../../features/transaction/transactionSlice';

export default function Form() {
  const [type, setType] = useState("all");
  const dispatch = useDispatch();

  const onChangeHandler = debounce((text) => {
    inputHandler(text);
  }, 700)

  function debounce(cb, delay) {
    let timeout
  
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(...args)
      }, delay)
    }
  }

  const inputHandler = (text) => {
    dispatch(setSearched(text));
    dispatch(setPageNo(1));
  }
  
  useEffect(() => {
      dispatch(setFilterType(type));
      dispatch(setPageNo(1));
  }, [dispatch, type])

  return (
    <div className="form">
        <form>
            <div className="form-group radio">
                <label>Type</label>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="income"
                        name="type"
                        checked={type === "income"}
                        onChange={(e) => setType("income")}
                    />
                    <label>Income</label>
                </div>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="expense"
                        name="type"
                        placeholder="Expense"
                        checked={type === "expense"}
                        onChange={(e) => setType("expense")}
                    />
                    <label>Expense</label>
                </div>
                <div className="radio_group">
                    <input
                        type="radio"
                        value="all"
                        name="type"
                        placeholder="All"
                        checked={type === "all"}
                        onChange={(e) => setType("all")}
                    />
                    <label>Both</label>
                </div>
            </div>

            <div className="form-group">
                <label>Search Transaction</label>
                <input
                    type="search"
                    placeholder="Search"
                    onChange={(e) => onChangeHandler(e.target.value)}
                />
            </div>
        </form>
    </div>
  )
}
