import {useContext} from 'react';
import horoscopesObj from '../data/horoscopes';
import {HoroscopeContext} from '../context/HoroscopeContext'

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  const {setCurrentSign} = useContext(HoroscopeContext)
  // const { sign } = useContext(HoroscopeContext)
  console.log('navbar re-render')

  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={() => setCurrentSign(sign)}>
         
        {sign}
        </span>
      ))}
    </nav>
  )
};

export default Navbar;