type params = {
  url: string,
  name: string
};


const CustomBtn = ({url, name}: params) =>{
  return (
    <a target='_blank' href={url}>
      <button>
        {name}
      </button>
    </a>
  )
}

export default CustomBtn;
