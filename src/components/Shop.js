import React from 'react'
import { useDispatch} from "react-redux";
import { bindActionCreators } from 'redux';
import {  actionCreators } from '../State/index';

const Shop = () => {
  const dispatch=useDispatch();
  const actions=bindActionCreators(actionCreators,dispatch);
  return (
    <div className='container my-1'>
        Add to cart
      <button className="btn btn-danger mx-2" onClick={()=>{actions.WithdrawMoney(100)}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(100)}}>+</button>
      

    </div>
  )
}

export default Shop
