interface props{
    icon:string;
    text:string

}

export const TextBannerEnd = ({icon,text}:props) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <img src={icon} alt="" className="w-8 h-8" />
      <p className="md:text-xl text-xs font-sans text-white">{text}</p>
    </div>
  );
};
