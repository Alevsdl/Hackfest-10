import React, { ButtonHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'verde' | 'naranja' | 'rosa' | 'morado' | 'celeste' | 'amarillo';
  border?: 'verde' | 'naranja' | 'rosa' | 'morado' | 'celeste' | 'amarillo';
  nombre: string;
  link: string;
}

const ButtonRoute: React.FC<ButtonProps> = ({
  color = 'verde',
  border = 'verde',
  nombre,
  link,
  children,
  ...rest
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'verde':
        return 'bg-maingreen';
      case 'naranja':
        return 'bg-orange-600 ';
      case 'rosa':
        return 'bg-pink-600';
      case 'morado':
        return 'bg-purple-600 ';
      case 'amarillo':
        return 'border-yellow-500 ';
      case 'celeste':
        return 'bg-teal-400 ';
      default:
        return 'bg-blue-500 ';
    }
  };

  const getColorClassBorder = () => {
    switch (color) {
      case 'verde':
        return 'border-maingreen hover:border-maingreen';
      case 'naranja':
        return 'border-orange-600 hover:border-orange-600 ';
      case 'rosa':
        return 'border-pink-600 hover:border-pink-600';
      case 'morado':
        return 'border-purple-600 hover:border-purple-600';
      case 'amarillo':
        return 'border-yellow-500 hover:border-yellow-500';
      case 'celeste':
        return 'border-teal-400 hover:border-teal-400';
      default:
        return 'border-blue-500 hover:border-blue-500';
    }
  };

  return (
    <div className="mb-4 flex h-16 w-full rounded-lg bg-white">
      <button
        onClick={() => {
          window.location.href = link;
        }}
        className={`relative inline-flex items-center overflow-hidden border-b-8 px-10 py-3 text-3xl font-medium text-gray-700 ${getColorClassBorder()} group bg-white hover:text-white`}
        {...rest}
      >
        <span
          className={`absolute left-0 block h-0 w-full transition-all ${getColorClass()} duration-400 ease top-1/2 opacity-100 group-hover:top-0 group-hover:h-full`}
        ></span>
        <span className="relative">
          <FontAwesomeIcon icon={faMapLocationDot} />
        </span>
      </button>
      <a
        href={link}
        className={`group relative inline-flex flex-1 items-center overflow-hidden px-12 py-3 text-xl font-semibold text-gray-700 hover:border-2 ${getColorClassBorder()}`}
      >
        <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="relative">{nombre}</span>
      </a>
    </div>
  );
};

export default ButtonRoute;
