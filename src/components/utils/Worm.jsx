import '../../../css/worm.css';

export default function Worm() {
  return (
    <>
    <div className="relative w-[100px] h-[3px] bg-[#FBAD04]">
        <div className="absolute worm w-[10px] h-[10px] bg-red-500 rounded-full right-0 top-[50%] translate-y-[-50%]"></div>
    </div>
    </>
  )
}
