import { useState } from 'react';
import '../App.css';


type botones = {
    opciones: string[],
    label: string
}

const MenuDesplegable = ({opciones, label}:botones) => {
    const [show, setShow] = useState(false);

    return(
        <button onClick={e =>setShow(!show)} className="openMenu">{label}
            <div className='topBarMenu'>
                {opciones.map(value => (
                    <button style={{display: !show ? "none" : "block"}} className="openMenu dropbtn"> {value} </button>
                            )
                        )
                }
            </div>
        </button>
    )
}

export default MenuDesplegable;
