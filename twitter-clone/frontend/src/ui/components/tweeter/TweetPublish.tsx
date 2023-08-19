import { Wrapper } from "../shared/Wrapper"

export const TweetPublish = () => {
  return (
    <Wrapper styles="bg-white flex flex-col gap-4 p-2 rounded-lg shadow w-5/6">
        <p className="text-xs font-medium">Tweet something</p>
        <div className="flex gap-2 items-center">
            <img className="object-cover rounded w-1/5" src="/img/photo.jpg" alt="" />
            <textarea className="w-full focus:outline-none text-xs"  placeholder="What's happening?" name="" id=""></textarea>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex text-xs">
                Archivos
                Privacidad
            </div>
            <button className="text-xs text-white bg-blue-500 px-4 py-1 rounded ">
                Tweet
            </button>
        </div>
    </Wrapper>
  )
}
