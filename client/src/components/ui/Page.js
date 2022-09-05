import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageNo } from '../../features/transaction/transactionSlice';

export default function Page({page}) {
  const dispatch = useDispatch();
  const {pageNo} = useSelector(state => state.transaction);

  const bgColor = page === pageNo ? "blue" : "#17CEEB";

  const pageNoHandler = () => {
    dispatch(setPageNo(page))
  }

  const pageStyle = {
    backgroundColor: bgColor,
    padding: "1px 15px",
    color: "white",
    cursor: "pointer",
    borderRadius: "10%",
    marginRight: '4px'
}
  
  return (
    <div style={pageStyle} onClick={pageNoHandler}>{page}</div>
  )
}


