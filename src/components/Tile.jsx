export default function Tile({value, selected, absent, onSelect}) {
  let color = selected? absent?"border-red-500":"border-emerald-500":"border-gray-300"

    return(
        <div className={` flex justify-center items-center w-14 h-14 m-5 my-3 border-4 rounded-2xl ${color}`}>
        <div onClick={() => onSelect(value)} className="font-bold text-lg">{value}</div>
      </div>
    )
}