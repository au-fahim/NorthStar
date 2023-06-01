import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <>
      {/* Search Bar */}
      <div className="flex sm:hidden flex-row gap-2 items-center py-1 px-3 rounded-full border border-gray-200 min-w-[180px]">
        <CiSearch className="icon icon-gray" />
        <input
          type="text"
          placeholder="Search"
          className="font-light outline-none bg-transparent"
        />
      </div>

      {/* Search Button */}
      <button className="btn-icon hidden md:block">
        <CiSearch className="icon" />
      </button>
    </>
  );
}
