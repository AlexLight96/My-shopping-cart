import { useState } from "react"


interface SearchBarProps {
    onSearchChange: (searchTerm: string) => void 
}


export const SearchBar = ({onSearchChange}: SearchBarProps) => {


    const [search, setSearch] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        onSearchChange(e.target.value)
    }

  return (
    <div className="max-w-md mx-auto mb-6 mt-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Buscar productos..." 
          value={search} 
          onChange={handleChange}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  )
}
