import { useState } from "react";
import ErrorDialog from "./ErrorDialog";

const App: React.FC = () => {
  const [Wanwan, setWanwan] = useState(false);
  const handlerOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setWanwan(true);
  };
  return (
    <>
      <div className="md:m-52 m-20 mt-40 flex-col">
        <div className="flex justify-center colum">
          <button onClick={handlerOnClick} className="">
            <img
              src="/img/smile.png"
              alt="smile"
              width={300}
              height={300}
              className="lg:hover:scale-110"
            />
          </button>
        </div>
        <div className="flex-col md:tracking-wide text-[30px] md:text-[60px] text-center pt-10 md:pt-20">
          <p className="p-3">Skinny dogs are full of food</p>
        </div>
        <div className="md:visible">
          <ErrorDialog />
        </div>
        {Wanwan && (
          <div className="flex justify-end invisible xl:visible mt-32 xl:animate-slide-tr animate-slide-tr-sp">
            <img src="/img/dog.png" alt="dog" />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
