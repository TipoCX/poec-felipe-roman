type parms = {
  url: string,
  name: string
}

const CustomBtn = ({url, name}: parms) =>{
  return (
    <a target='blank' href={url}>
      <button>
        {name}
      </button>
    </a>
  )
}

export default CustomBtn;
