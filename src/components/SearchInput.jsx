import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <form className="flex items-center relative" onSubmit={handleSubmit}>
      <div className="flex gap-4 py-1 px-4 border w-full md:w-96 border-gray-700 rounded-xl">
        <button type="button" className="cursor-pointer">
          <Search size={20} className="text-gray-600" />
        </button>
        <input
          type="text"
          placeholder="Faça a sua busca"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="w-full h-10 py-3 text-sm text-gray-50 bg-black/10 outline-none placeholder:text-gray-600 placeholder:text-sm"
        />
      </div>
    </form>
  );
}
