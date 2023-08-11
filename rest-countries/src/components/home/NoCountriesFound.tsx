import { useTheme } from "../../hooks";
import { SadFaceIcon } from "../ui/Icons";
import { FC } from "react";

export const NoCountriesFound: FC<Props> = ({ searchedCountry}) => {
  const { isDarkTheme } = useTheme();
  return (
    <div className={`flex flex-col gap-2  items-center ${isDarkTheme && 'text-white'}`}>
      <SadFaceIcon />
      <h4 className="text-xl font-medium">What happened?</h4>
      <p>No countries found with <strong>{searchedCountry}</strong></p>
    </div>
  );
};

type Props = {
  searchedCountry: string;
};
