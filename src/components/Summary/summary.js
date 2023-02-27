// import { useDispatch, useSelector } from 'react-redux'
// import './summaryStyle.css'
// import { selectorCurrentUser } from '../store/user/user.selector'
// import { useState } from 'react'
// import { movementsSort } from '../store/user/user.action'
// const Summary = ()=>{
//     const dispatch = useDispatch()
//     const currentUser = useSelector(selectorCurrentUser)
//     const [sortamount, setSortAmount] = useState(false)
//     const [originalMovements, setOriginalMovements] = useState()
//     const keepOriginal = ()=>{
//         // dispatch(MovementUnsort(currentUser))

//     }
//     const sortAmount = ()=>{
//         // console.log(currentUser.movements.reverse())
//         dispatch(movementsSort(currentUser))
        
//     }
//     const sortOrNot = (sortamount)=>{
//      return sortamount === true ?sortAmount: keepOriginal
//     }
//     return (
//         <div className="summary">
//         {/* <p className="summary__label">In</p>
//         <p className="summary__value summary__value--in">0000€</p>
//         <p className="summary__label">Out</p>
//         <p className="summary__value summary__value--out">0000€</p>
//         <p className="summary__label">Interest</p>
//         <p className="summary__value summary__value--interest">0000€</p>
//         <button onClick={sortOrNot(!sortamount)} className="btn--sort">&darr; SORT BY AMOUNT</button>
//         <button className="btn--sort">&darr; SORT BY DATE</button> */}
//       </div>
//     )
// }

// export default Summary