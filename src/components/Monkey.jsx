import openEyeMonkey from "../assets/monkey.png";
import closedEyeMonkey from "../assets/eye_closed_monkey.png";

export default function Monkey({ absent, setAbsent }) {
    return (
        <div className=' w-14 h-14' onClick={() => setAbsent(!absent)} >
            <img src={`${absent ? closedEyeMonkey : openEyeMonkey}`} />
        </div>

    )
}