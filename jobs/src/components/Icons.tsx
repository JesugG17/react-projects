import { FC } from "react";

export const Earth: FC<EarthProps> = ({ opacity = '100' }) => {
  return <img className={`object-contain w-4 h-4 opacity-${ opacity }`} src="/earth.png" alt="earth icon" />;
};

export const Clock = () => {
    return <img className='object-contain w-4 h-4 opacity-30' src="/clock.png" alt="clock icon" />
}


type EarthProps = {
    opacity?: string
}
