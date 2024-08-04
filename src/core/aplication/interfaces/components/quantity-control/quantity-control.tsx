import { bagActions } from '@/core/aplication/store/reducers/bag-controller/reducer-bag-controller';
import { RootState } from '@/core/aplication/store/store';
import { useDispatch, useSelector } from 'react-redux';
import style from './quantity-control.module.scss';
import { IQuantityControlParams } from "./type-quantity-control";
export default function QuantityControl({id}:IQuantityControlParams) {
  const dispatch = useDispatch()
  const product = useSelector((state: RootState) =>
    state.bagController.products.find((product) => product.id === id)
  );

  
  return (
    <div className={style.quantityControl}>
      <button type="button" onClick={()=>dispatch(bagActions.decreaseQtyProduct(id))}>{'-'}</button>
      <span>{product?.qty}</span>
      <button type="button" onClick={()=>dispatch(bagActions.increaseQtyProduct(id))}>{'+'}</button>
    </div>
  );
}
