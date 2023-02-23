import './movmentsStyle.css'
import Movement from './movementsRow'
import { useSelector } from 'react-redux'
import { selectorCurrentUser } from '../store/user/user.selector'

const Movements = ()=>{
    const account = useSelector(selectorCurrentUser)
    console.log(account)
    const movements = account.movements
    console.log(movements)
    return(
        <div className='movements'>
         {movements.map((mov, index)=> <Movement mov = {mov} index = {index}/>)}
        </div>
    )
    
}

export default Movements