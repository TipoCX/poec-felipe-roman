import { useEffect, useState } from 'react';
import '../App.css';

type botones = {
    id: number,
    fun(params: number): void,
    params: number,
    opciones: string[],
    label: string
}

const MenuDesplegable = ({id, opciones, params, label, fun}:botones) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(()=> {
        if (params!=id) {
            setShow(false)
        }
    },[params])

    function ocultar() {
        setShow(false)
        fun(0)
    }

    function mostrar(){
        setShow(true)
        fun(id)
    }


    return(
        <button onClick={e => id == params ? ocultar() : mostrar()} className="openMenu">{label}
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
