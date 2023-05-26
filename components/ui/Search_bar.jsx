import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <>
      {/* Search Bar */}
      <div className="hidden flex-row gap-2 items-center py-2 px-2 rounded-md border border-gray-200 bg-slate-50 text-base">
        <CiSearch className="icon icon-gray" />
        <input
          type="text"
          placeholder="Search"
          className="font-light outline-none bg-transparent"
        />
      </div>

      {/* Search Button */}
      <button className="btn-icon">
        <CiSearch className="icon" />
      </button>
    </>
  );
}
