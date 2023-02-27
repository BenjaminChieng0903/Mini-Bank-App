import './movmentsStyle.css'
import './summaryStyle.css'
import Movement from './movementsRow'
import { useSelector } from 'react-redux'
import { selectorCurrentUser } from '../store/user/user.selector'
import { useState } from 'react'

const Movements = ()=>{
    const account = useSelector(selectorCurrentUser)
    console.log(account)
    const movements = account.movements
    console.log(movements)
    const [sort, setSort] = useState(false)
    const original = movements.map((mov, index)=> <Movement mov = {mov} index = {index}/>)
    return(
        <>
        <div className='movements'>
         {sort ? original.sort((each1, each2) => each2.props.mov- each1.props.mov)
         :original.reverse()}
        </div>
        <div className="summary">
        <p className="summary__label">In</p>
        <p className="summary__value summary__value--in">0000€</p>
        <p className="summary__label">Out</p>
        <p className="summary__value summary__value--out">0000€</p>
        <p className="summary__label">Interest</p>
        <p className="summary__value summary__value--interest">0000€</p>
        <button onClick={()=>{setSort(!sort) 
            console.log(sort)}} className="btn--sort">&darr; SORT BY AMOUNT</button>
        <button  className="btn--sort">&darr; SORT BY DATE</button>
      </div>
        </>
    )
    
}

export default Movements