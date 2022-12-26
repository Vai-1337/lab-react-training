import '../css/greetings.css'

export default function Greetings({ lang, children }) {
    
    let greeting;

  switch (lang) {
    case 'de':
      greeting = 'Guten Tag';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      greeting = 'Hello';
      break;
  }

    return(
        <div className='greetings'>
             &nbsp;{greeting}, {children}
        </div>
    );
};