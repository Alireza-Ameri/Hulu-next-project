const HeaderIcon = ({ Icon, title }) => {
  return (
    <div className="group mt-4  flex flex-col items-center cursor-pointer w-8 sm:w-18 hover:text-white  ">
      <Icon />
      <p className="mt-1 tracking-wider opacity-0 group-hover:opacity-100  ">
        {title}
      </p>
    </div>
  );
};

export default HeaderIcon;
