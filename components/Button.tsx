import React, { ButtonHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'verde' | 'naranja' | 'rosa' | 'morado' | 'celeste' | 'amarillo';
    border?: 'verde' | 'naranja' | 'rosa' | 'morado' | 'celeste' | 'amarillo';
    nombre: string;
    link: string;
}

const ButtonRoute: React.FC<ButtonProps> = ({ color = 'verde', border = 'verde', nombre, link, children, ...rest }) => {
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
        <div className="flex bg-white w-full rounded-lg h-16 mb-4">
            <button
                onClick={() => { window.location.href = link; }}
                className={`text-3xl relative inline-flex items-center px-10 py-3 overflow-hidden font-medium text-gray-700 border-b-8 ${getColorClassBorder()} bg-white hover:text-white group`}
                {...rest}
            >
                <span
                    className={`absolute left-0 block w-full h-0 transition-all ${getColorClass()} opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease`}
                ></span>
                <span className="relative">
                    <FontAwesomeIcon icon={faMapLocationDot} />
                </span>
            </button>
            <a
                href={link}
                className={`flex-1 relative inline-flex items-center px-12 py-3 overflow-hidden text-xl font-semibold text-gray-700 group hover:border-2 ${getColorClassBorder()}`}
            >
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </span>
                <span className="relative">{nombre}</span>
            </a>
        </div>
    );
};

export default ButtonRoute;
