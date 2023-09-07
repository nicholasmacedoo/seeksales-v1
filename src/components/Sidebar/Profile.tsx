import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/nicholasmacedoo.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-slate-200">
          Nicholas Macedo
        </span>
        <span className="text-sm text-slate-400 truncate">
          nicholasmacedoo@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-full p-2 hover:bg-slate-700"
      >
        <LogOut className="h-5 w-5 text-slate-500" />
      </button>
    </div>
  )
}
