/*Requerimientos:
  icono */
import '../App.css';
import icon from '../../../assets/icon.svg';
import CustomBtn from 'renderer/components/btn';
type params = {title: string}

const Home = ({title}:params) => {
  return (
    <div className='juan'>
        <div className="icon">
          <img width='200' alt="icon" src={icon}/>
        </div>
        <h1>{title}</h1>
        <div className="btn_container">
          <CustomBtn name='ClassRoom' url='https://classroom.google.com/c/Mjg0MDIzNjg3MTQ4'/>
          <CustomBtn name='GitHub' url='https://github.com/'/>
        </div>
    </div>
  );
};


export default Home;
