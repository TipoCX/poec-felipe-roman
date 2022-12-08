import '../App.css';
import CustomBtn from 'renderer/components/btn';
import { Link } from 'react-router-dom';
import icon from '../../../assets/icon.svg';

type params = { title: string };

const Home = ({ title }: params) => {
  return (
    <div className="juan">
      <div className="icon">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>{title}</h1>
      <div className="btn_container">
        <CustomBtn
          name="ClassRoom"
          url="https://classroom.google.com/c/Mjg0MDIzNjg3MTQ4"
        />
        <CustomBtn
          name="GitHub"
          url="https://github.com/TipoCX/poec-felipe-roman.git"
        />
        <Link to="/profile">
          <button type="button">Ver Perfil </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
