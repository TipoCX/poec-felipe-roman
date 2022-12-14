import '../App.css';
import MenuDesplegable from "./MenuShow";

const TitleBar = () =>{

    return(
        <div id="topBar">
            <MenuDesplegable label='Archivo' opciones={["sdad", "dsad", "asdad"]}/>
            <MenuDesplegable label='Editar' opciones={["fsa", "sdad", "asda"]}/>
            <MenuDesplegable label='Ayuda' opciones={["sfasdgsddad", "dsxvzsvsad", "sadas"]}/>

        </div>
    )
}

export default TitleBar;
