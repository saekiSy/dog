import React, { useState } from "react";

const ErrorDialog: React.FC = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [isOpen5, setIsOpen5] = useState(true);
  const [isOpen6, setIsOpen6] = useState(true);
  const [View, setView] = useState(1);
  const [ViewFlag, setViewFlag] = useState(true);

  const handlerOnClick1 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen1(!isOpen1);
    setView(View + 1);
    console.log("hello wanwan");
    if (View >= 6) setViewFlag(false);
  };
  const handlerOnClick2 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen2(!isOpen2);
    setView(View + 1);
    console.log("baw waw");
    if (View >= 6) setViewFlag(false);
  };
  const handlerOnClick3 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen3(!isOpen3);
    setView(View + 1);
    console.log("grrrrr");
    if (View >= 6) setViewFlag(false);
  };
  const handlerOnClick4 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen4(!isOpen4);
    setView(View + 1);
    console.log("🦴");
    if (View >= 6) setViewFlag(false);
  };
  const handlerOnClick5 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen5(!isOpen5);
    setView(View + 1);
    console.log("🐕");
    if (View >= 6) setViewFlag(false);
  };
  const handlerOnClick6 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen6(!isOpen6);
    setView(View + 1);
    console.log("waon");
    if (View >= 6) setViewFlag(false);
  };

  return (
    <div>
      {ViewFlag && (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden transition-all bg-red-900/90 invisible md:visible">
          {isOpen1 && (
            <div className="bg-red-600 absolute top-[200px] animate-vibrate-1">
              <p className="flex justify-end pr-3 py-1">
                <button onClick={handlerOnClick1}>×</button>
              </p>
              <div className="bg-yellow-100 p-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="../public/img/error.png"
                    alt="注意マーク"
                    width={50}
                    height={50}
                    className="animate-text-flicker-in-glow"
                  />
                </div>
              </div>
            </div>
          )}
          {isOpen2 && (
            <div className="bg-red-600 absolute top-[600px] animate-vibrate-1 right-[90px]">
              <p className="flex justify-end pr-3 py-1">
                <button onClick={handlerOnClick2}>×</button>
              </p>
              <div className="bg-yellow-100 p-20">
                <div className="flex justify-center mb-4">
                  <img
                    src="../public/img/error.png"
                    alt="注意マーク"
                    width={50}
                    height={50}
                    className="animate-text-flicker-in-glow"
                  />
                </div>
              </div>
            </div>
          )}

          {isOpen3 && (
            <div className="bg-red-600 absolute top-[200px] animate-vibrate-1 left-[200px]">
              <p className="flex justify-end pr-3 py-1">
                <button onClick={handlerOnClick3}>×</button>
              </p>
              <div className="bg-yellow-100 p-32">
                <div className="flex justify-center mb-4">
                  <img
                    src="../public/img/error.png"
                    alt="注意マーク"
                    width={350}
                    height={350}
                    className="animate-text-flicker-in-glow"
                  />
                </div>
              </div>
            </div>
          )}

          {isOpen4 && (
            <div className="bg-red-600 absolute top-[80px] animate-vibrate-1 right-[200px]">
              <p className="flex justify-end pr-3 py-1">
                <button onClick={handlerOnClick4}>×</button>
              </p>
              <div className="bg-yellow-100 p-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="../public/img/error.png"
                    alt="注意マーク"
                    width={400}
                    height={400}
                    className="animate-text-flicker-in-glow"
                  />
                </div>
              </div>
            </div>
          )}

          {isOpen5 && (
            <div className="bg-red-600 absolute top-[5px] animate-vibrate-1 left-[300px]">
              <p className="flex justify-end pr-3 py-1">
                <button onClick={handlerOnClick5}>×</button>
              </p>
              <div className="bg-yellow-100 p-8">
                <div className="flex justify-center mb-4">
                  <img
                    src="../public/img/error.png"
                    alt="注意マーク"
                    width={200}
                    height={200}
                    className="animate-text-flicker-in-glow"
                  />
                </div>
              </div>
            </div>
          )}

          {isOpen6 && (
            <div className="bg-red-600 absolute right-[500px] animate-vibrate-1 top-[500px]">
              <p className="flex justify-end pr-3 py-1">
                <button onClick={handlerOnClick6}>×</button>
              </p>
              <div className="bg-yellow-100 p-12 px-28">
                <div className="flex justify-center mb-4">
                  <img
                    src="../public/img/error.png"
                    alt="注意マーク"
                    width={180}
                    height={180}
                    className="animate-text-flicker-in-glow"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ErrorDialog;
