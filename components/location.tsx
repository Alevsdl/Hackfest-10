import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
interface LocationProps {
  parada: string;
}
const Location: React.FC<LocationProps> = ({ parada }) => {
  return (
    <div className="mt-2 w-[100%] rounded-xl border-2 bg-zinc-200">
      <div className="flex h-[70px] w-full rounded-lg bg-[white]">
        <div className="pl-6 pr-6 pt-4 text-3xl text-gray-700">
          <FontAwesomeIcon icon={faMapPin} />
        </div>
        <div className="flex flex-1 items-center border-b-8 border-cyan-400 text-xl">
          <p>{parada}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
