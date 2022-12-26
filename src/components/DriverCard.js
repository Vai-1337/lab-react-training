import '../css/drivercard.css'

export default function DriverCard (props) {   

    return (
        <div className='drivercard'>
          <img src={props.img} alt={props.name} className="img" />
          <div className='write'>
          <h2 className="name">{props.name}</h2>          
          <p className="rating">{props.rating}</p>
          <p className="car">{props.car.model} - {props.car.licensePlate}</p>
          </div>
        </div>
      );
    };
    
