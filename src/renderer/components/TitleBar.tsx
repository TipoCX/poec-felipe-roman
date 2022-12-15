import { useState } from 'react';
import '../App.css';
import MenuDesplegable from "./MenuShow";

const TitleBar = () =>{
    const [menuSelec, setMenuSelect] = useState<number>(0);

    return(
        <div id="topBar">
            <div>
                <MenuDesplegable id={1} fun={setMenuSelect} params={menuSelec} label='Archivo' opciones={["sdad", "dsad", "asdad"]}/>
                <MenuDesplegable id={2} fun={setMenuSelect} params={menuSelec} label='Editar' opciones={["fsa", "sdad", "asda"]}/>
                <MenuDesplegable id={3} fun={setMenuSelect} params={menuSelec} label='Ayuda' opciones={["sfasdgsddad", "dsxvzsvsad", "sadas"]}/>
            </div>
            <div>
                <button className='btn-algo'>_</button>
                <button className='btn-algo'>□</button>
                <button className='btn-algo'>x</button>
            </div>
        </div>
    )
}

export default TitleBar;
