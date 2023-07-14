
export const Loading = () => {
  return (
    <div className="w-full h-[350px] lg:[500px] flex flex-col gap-2 items-center justify-center">
        <img className="w-16 h-16 animate-spin" src="/loading.png" alt="" />
        <p className="text-search font-bold">Please be patience...</p>
    </div>
  )
}
