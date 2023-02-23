import './movmentsStyle.css'
const Movement = ({mov, index})=>{
    return (
        <div className="movements__row">
        {mov > 0? <div className="movements__type movements__type--deposit">{index+1} deposit</div>
        :  <div className="movements__type movements__type--withdrawal">{index+1} withdrawal</div>}
        <div className="movements__date">3 days ago</div>
        <div className="movements__value">{mov}$ </div>
      </div>
    )
}

export default Movement