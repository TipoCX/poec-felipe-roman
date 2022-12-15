import { useEffect, useState } from 'react';
import icon from '../../../assets/icon.svg';
import '../App.css';


const Profile = () => {
  const [mode, setMode] = useState("skeleton");

  const [title, setTitle] = useState("Cargando...");
  const [name, setName] = useState("Felipe");
  const [lastName, setLastName] = useState("Roman");
  const [age, setAge] = useState("19");
  const [dateBirth, setDateBirth] = useState("17-11-2003");
  const [numb, setNumb] = useState("'2972999999");
  const [addrss, setaddrss] = useState("mi casa");
  const [DNI, setDNI] = useState("0");
  const [fav, setFav] = useState("conpu");


  useEffect(()=>{
    setTimeout(()=>{
      setMode("read")
      setTitle("My Profile")
    }, 3000)
  },
  []);



  return(
    <div className='body'>
      <h1> {title} </h1>
    <div className="container">

      <div className="inputs">

        <div className="row">
          {mode === "skeleton"? <div className='fake-inp'></div> : <span></span> }
          {mode === "write"? <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' type="text" /> : <span></span> }
          {mode === "read" ? <p>{name}</p> : <span></span> }

          {mode === "skeleton" ? <div className='fake-inp'></div> : <span></span> }
          {mode === "write" ? <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Lastname' type="text" /> : <span></span> }
          {mode === "read" ? <p>{lastName}</p> : <span></span> }
        </div>

        <div className="row">
          {mode === "skeleton"? <div className='fake-inp'></div> : <span></span> }
          {mode === "write" ? <input value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' type="number" /> : <span></span> }
          {mode === "read" ? <p>{age}</p> : <span></span> }

          {mode === "skeleton" ? <div className='fake-inp'></div> : <span></span> }
          {mode === "write" ? <input value={dateBirth} onChange={(e) => setDateBirth(e.target.value)} placeholder='Birth Date' type="text" /> : <span></span> }
          {mode === "read" ? <p>{dateBirth}</p> : <span></span> }
        </div>

        <div className="row">
          {mode === "skeleton"? <div className='fake-inp'></div> : <span></span> }
          {mode === "write" ? <input value={numb} onChange={(e) => setNumb(e.target.value)} placeholder='Telephone number' type="text" /> : <span></span> }
          {mode === "read" ? <p>{numb}</p> : <span></span> }

          {mode === "skeleton" ? <div className='fake-inp'></div> : <span></span> }
          {mode === "write" ? <input value={addrss} onChange={(e) => setaddrss(e.target.value)} placeholder='address' type="text" /> : <span></span> }
          {mode === "read" ? <p>{addrss}</p> : <span></span> }
        </div>

        <div className="row">
          {mode === "skeleton" ? <div className='fake-inp'></div>: <span></span> }
          {mode === "write" ? <input value={DNI} onChange={(e) => setDNI(e.target.value)} placeholder='DNI' type="number" />: <span></span> }
          {mode === "read" ? <p>{DNI}</p>: <span></span> }
        </div>

        <div className="row">
          {mode === "skeleton" ? <div className='fake-area'></div> : <span></span> }
          {mode === "write" ? <textarea value={fav} onChange={(e) => setFav(e.target.value)} placeholder='Favorite Thing' name="fav" cols={30} rows={10}></textarea> : <span></span> }
          {mode === "read" ? <p>{fav}</p> : <span></span> }
        </div>

      </div>
      <div className="img-container">

        {title === "Cargando..."? <div className='fake-img'></div> : <img src={icon} alt="icon" />}

        {mode === "skeleton" ? <div className='fake-btn'></div> : <span></span> }
        {mode === "write" ? <button style={{"backgroundColor": "blue"}} onClick={(e) => setMode("read")}>Save</button> : <span></span> }
        {mode === "read" ? <button style={{"backgroundColor": "green"}} onClick={(e) => setMode("write")}>Edit</button> : <span></span> }



      </div>
      </div>
    </div>
  )
}

export default Profile;
