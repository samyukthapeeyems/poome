import { useEffect, useState } from 'react'
import './App.css'
import Tile from './components/Tile';
import Monkey from './components/Monkey';
import { today } from './functions/date';
import PoomiButton from './components/PoomiButton';

function App() {
  const TOTAL = 70;
  const list = Array.from({ length: TOTAL }, (_, i) => i + 1);
  const [absent, setAbsent] = useState(true);
  const [selectedRollNos, setSelectedRollNos] = useState([]);
  const [count, setCount] = useState({
    absent: 0,
    present: 0
  });

  useEffect(() => {
    let _count = {}
    if (absent) {
      _count.absent = selectedRollNos.length
      _count.present = TOTAL - selectedRollNos.length
    }
    else {
      _count.absent = TOTAL - selectedRollNos.length
      _count.present = selectedRollNos.length
    }
    setCount(_count);
  }, [selectedRollNos, absent]);

  const updateList = (rollNo) => {
    if (selectedRollNos.includes(rollNo)) {
      setSelectedRollNos(
        selectedRollNos.filter((value) => value != rollNo)
      );
    }
    else {
      setSelectedRollNos([...selectedRollNos, rollNo]);
    }
  }


  const sendList = () => {
    let sortedRollNos = selectedRollNos.sort((a, b) => a - b);
    let rollNoList = sortedRollNos.join(", ");
    let message = encodeURIComponent(
      `${today()}\t${absent ? "Absent" : "Present"}\n----------------------\n${rollNoList}`
      );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  }

  return (
    <div className='font-["Poppins"]'>
      <div className='fixed top-0 flex flex-col items-center pt-3 pb-1 px-10 bg-gray-100 w-full bg-opacity-50 backdrop-blur-md'>
        <div className='flex justify-between items-center w-full py-5 '>
          <p className='text-3xl font-semibold text-amber-800'>🌸 me</p>
          <Monkey absent={absent} setAbsent={setAbsent}></Monkey>
        </div>
        <div className='w-3/4 flex justify-around items-center m-2 p-0.5 text-sm text-gray-500 font-medium border border-dashed rounded-xl bg-white border-black'>
          <p>Present {count.present}</p>
          <p>Absent {count.absent}</p>

        </div>

      </div>
      <div className="overflow-y-scroll pt-40 pb-20 h-screen grid grid-cols-4 mx-4 ml-2">
        {
          list.map((value, index) => <Tile value={value} key={index} onSelect={updateList} selected={selectedRollNos.includes(value)} absent={absent} />)
        }
      </div>

        {selectedRollNos.length>0 && <PoomiButton sendList={sendList}></PoomiButton>}

    </div>
  )
}

export default App
