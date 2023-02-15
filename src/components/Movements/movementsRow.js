import './movmentsStyle.css'
const Movement = ({mov})=>{
    return (
        <div className="movements__row">
        <div className="movements__type movements__type--deposit">2 deposit</div>
        <div className="movements__date">3 days ago</div>
        <div className="movements__value">{mov}</div>
      </div>
    )
}

export default Movement