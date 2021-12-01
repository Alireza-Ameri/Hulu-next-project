import HeaderIcon from "../HeaderIcon/HeaderIcon";
import {
  HomeIcon,
  SearchIcon,
  BadgeCheckIcon,
  UserIcon,
  CollectionIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col   sm:flex-row justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={LightningBoltIcon} title="TENDING" />
        <HeaderIcon Icon={BadgeCheckIcon} title="VERIFIED" />
        <HeaderIcon Icon={CollectionIcon} title="COLLECTION" />
        <HeaderIcon Icon={SearchIcon} title="SEARCH" />
        <HeaderIcon Icon={UserIcon} title="ACCOUND" />
      </div>
      <div className="mt-4 mr-3">
        <span className="font-bold text-3xl">HULU</span>
      </div>
    </header>
  );
};

export default Header;
