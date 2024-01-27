const Navbar = ({
  landing,
  work,
  contact,
}: {
  landing: () => void;
  work: () => void;
  contact: () => void;
}) => {
  return (
    <div className="fixed h-full w-full top-0 md:h-[70px] z-10">
      <div className="h-full w-full max-w-[1366px] mx-auto hidden md:flex flex-col items-center justify-between md:flex-row px-4">
        <div className="h-[50px] flex items-center justify-center">
          <div
            onClick={landing}
            className="cursor-pointer bg-[rgba(255,255,255,0.5)] backdrop-blur-md rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-lg"
          >
            GB
          </div>
        </div>
        <div className="h-[50px] flex items-center justify-center">
          <div className="bg-[rgba(255,255,255,0.5)] text-black py-2 px-8 flex gap-6 rounded-2xl backdrop-blur-md shadow-2xl">
            <div className="cursor-pointer">About</div>
            <div onClick={work} className="cursor-pointer">
              Works
            </div>
            <div onClick={contact} className="cursor-pointer">
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
