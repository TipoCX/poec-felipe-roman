import { useEffect, useState } from 'react';
import icon from '../../../assets/icon.svg';
import '../App.css';


const Profile = () => {
  const [title, setTitle] = useState("Cargando...");
  useEffect(()=>{
    setTimeout(()=>{
      setTitle("My Profile")
    }, 30000)
  },
  [title]);

  return(
    <div className='body'>
      <h1> {title} </h1>
      <button onClick={e => setTitle("Cargando...")}></button>
    <div className="container">

      <div className="inputs">

        <div className="1row">
          {title === "Cargando..."? <div className='fake-inp'></div> : <input placeholder='Name' type="text" />}
          {title === "Cargando..."? <div className='fake-inp'></div> : <input placeholder='Lastname' type="text" />}
        </div>

        <div className="2row">
          {title === "Cargando..."? <div className='fake-inp'></div> : <input placeholder='Age' type="number" />}
          {title === "Cargando..."? <div className='fake-inp'></div> : <input placeholder='Birth Date' type="text" />}
        </div>

        <div className="3row">
          {title === "Cargando..."? <div className='fake-inp'></div> : <input placeholder='DNI' type="text" />}
        </div>

        <div className="4row">
          {title === "Cargando..."? <div className='fake-area'></div> : <textarea placeholder='Favorite Thing' name="fav" cols={30} rows={10}></textarea>}
        </div>

      </div>
      <div className="img-container">

        {title === "Cargando..."? <div className='fake-img'></div> : <img src={icon} alt="icon" />}

      </div>
      </div>
    </div>
  )
}

export default Profile;
