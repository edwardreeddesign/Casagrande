import { useState } from 'react';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

const Toggle = ({ children, title, isOpen, onClick }) => {
  const [toggle, setToggle] = useState(false);
  const [isOpenArrow, setIsOpenArrow] = useState(false);

  const toggleArrow = () => {
    setIsOpenArrow(!isOpenArrow);
  };

  return (
    <div className="cursor-pointer" layout onClick={() => setToggle(!toggle)}>
      <h3
        className={`my-8 text-xl flex items-center  ${
          !isOpen ? 'border-b-2 border-orange-400 ' : ''
        }`}
        layout
        onClick={() => {
          toggleArrow();
          onClick();
        }}
      >
        {!isOpen ? <BsArrowDownShort className="" /> : <BsArrowUpShort />}{' '}
        &nbsp; {title}
      </h3>
      {isOpen ? children : null}
      <div className="bg-green-400  h-1 shadow-shadow2 w-full" />
    </div>
  );
};
export default Toggle;
