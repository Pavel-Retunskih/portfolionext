export function GistCardSkeleton() {
  return (
      <div className="w-[664px] h-full flex flex-col">
        <div className="w-full flex items-center justify-between mb-6">
          <div className="flex gap-2 items-center">
            <div className="h-9 w-9 rounded-full bg-lines/60 animate-pulse"/>
            <div className="flex gap-1.5 flex-col">
              <div className="h-4 w-32 bg-lines/60 animate-pulse rounded"/>
              <div className="h-3 w-20 bg-lines/50 animate-pulse rounded"/>
            </div>
          </div>
          <div className="h-3 w-16 bg-lines/50 animate-pulse rounded"/>
        </div>

        <div
            className="border border-lines rounded-lg bg-primary-dark_blue flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-lines/60 shrink-0">
            <div className="h-3 w-24 bg-lines/50 animate-pulse rounded"/>
            <div className="h-3 w-14 bg-lines/50 animate-pulse rounded"/>
          </div>
          <div className="p-8 flex-1 min-h-0 ">
            <div className="h-full w-full bg-lines/40 animate-pulse rounded"/>
          </div>
        </div>

        <div className="border-t border-t-lines pt-3 shrink-0 max-h-[48px]">
          <div className="h-4 w-3/4 bg-lines/50 animate-pulse rounded"/>
        </div>
      </div>
  )
}