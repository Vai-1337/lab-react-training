import '../css/random.css'

export default function Random({ min, max }) {

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return(
        <div className='random'>
            &nbsp;{randomNumber}
        </div>
    )
}