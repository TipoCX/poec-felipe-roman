import '../App.css';
import MenuDesplegable from "./MenuShow";

const TitleBar = () =>{

    return(
        <div id="topBar">
            <div>
                <MenuDesplegable label='Archivo' opciones={["sdad", "dsad", "asdad"]}/>
                <MenuDesplegable label='Editar' opciones={["fsa", "sdad", "asda"]}/>
                <MenuDesplegable label='Ayuda' opciones={["sfasdgsddad", "dsxvzsvsad", "sadas"]}/>
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
