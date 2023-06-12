import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
interface LocationProps {
    parada: string;
}
const Location: React.FC<LocationProps> = ({ parada }) => {
    return (
        <div className="rounded-xl w-[100%] bg-zinc-200 border-2 mt-2">
            <div className="w-full h-[70px] bg-[white] rounded-lg flex">
                <div className="text-3xl pt-4 pr-6 pl-6 text-gray-700">
                    <FontAwesomeIcon icon={faMapPin} />
                </div>
                <div className="flex-1 border-b-8 border-cyan-400 flex items-center text-xl">
                    <p>{parada}</p>
                </div>
            </div>
        </div>
    );
};

export default Location;