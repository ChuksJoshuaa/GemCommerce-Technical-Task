export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="relative w-20 h-20">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-8 bg-[#EE6F4B] rounded-[50%] animate-pulse"
          style={{ animationDelay: '0ms' }}
        />
        <div
          className="absolute top-0 left-1 w-5 h-5 bg-[#EE6F4B] rounded-full animate-pulse"
          style={{ animationDelay: '100ms' }}
        />
        <div
          className="absolute top-0 right-1 w-5 h-5 bg-[#EE6F4B] rounded-full animate-pulse"
          style={{ animationDelay: '200ms' }}
        />
        <div
          className="absolute top-4 left-[-4px] w-4 h-4 bg-[#EE6F4B] rounded-full animate-pulse"
          style={{ animationDelay: '300ms' }}
        />
        <div
          className="absolute top-4 right-[-4px] w-4 h-4 bg-[#EE6F4B] rounded-full animate-pulse"
          style={{ animationDelay: '400ms' }}
        />
      </div>

      <div className="mt-6 flex items-center gap-1">
        <span className="text-[#161723] font-medium text-lg">Loading</span>
        <span className="flex gap-1">
          <span className="w-2 h-2 bg-[#EE6F4B] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-[#EE6F4B] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-[#EE6F4B] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </span>
      </div>
    </div>
  )
}
