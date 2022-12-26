import '../css/creditcard.css'

export default function CreditCard({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  }) {

    const lastFourDigits = number.slice(-4);

    return(
        <div className='creditcard'>
            <img src={`../asset//images/visa ${type.toLowerCase()}.png`}  alt={type} />
                <p>**** **** **** {lastFourDigits}</p>
                <p>
                    {expirationMonth}/{expirationYear}
                </p>
                <p>{bank}</p>
                <p>{owner}</p>
        </div>
    )
}