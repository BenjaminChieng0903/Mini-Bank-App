import './movmentsStyle.css'
import './summaryStyle.css'
import Movement from './movementsRow'
import { useSelector } from 'react-redux'
import { selectorCurrentUser } from '../store/user/user.selector'
import { useState } from 'react'
import { CalBalance } from '../../utils/calBalance'

const Movements = ()=>{
    const account = useSelector(selectorCurrentUser)
    console.log(account)
    const movements = account.movements
    console.log(movements)
    const [sort, setSort] = useState(false)
    const original = movements.map((mov, index)=> <Movement mov = {mov} index = {index}/>)
    const In = account.movements.reduce((acc, item)=>{
        if(item > 0){
            return acc + item
        }else return acc + 0
    }, 0)
    const Out = Math.abs(account.movements.reduce((acc, item)=>{
        if(item < 0){
            return acc + item
        }else return acc + 0
    }, 0))
    const interest = CalBalance(account) * account.interestRate/100
    return(
        <>
        <div className='movements'>
         {sort ? original.sort((each1, each2) => each2.props.mov- each1.props.mov)
         :original.reverse()}
        </div>
        <div className="summary">
        <p className="summary__label">In</p>
        <p className="summary__value summary__value--in">{In}</p>
        <p className="summary__label">Out</p>
        <p className="summary__value summary__value--out">{Out}</p>
        <p className="summary__label">Interest</p>
        <p className="summary__value summary__value--interest">{interest}</p>
        <button onClick={()=>setSort(!sort)} className="btn--sort">&darr; SORT BY AMOUNT</button>
        <button  className="btn--sort">&darr; SORT BY DATE</button>
      </div>
        </>
    )
    
}

export default Movements