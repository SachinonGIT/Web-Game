const MsgBoxCompo = ({
    msgText,
    bgColor = "bg-zinc-500/25",
    className = "justify-end",
    currentTime,
    ...props
  }) => {
    return (
      <div
        className={`msgArea flex ${className} p-2`}
        id={Date.now()}
        {...props}
      >
        <div
          className={`msgContLeft border border-white/10 w-fit rounded-lg flex gap-2 ${bgColor}`}
        >
          <div className="p-2 pr-0 text-white text-sm text-left">{msgText}</div>
          <div className="text-xs text-white/50 flex justify-end items-end p-1">
            {currentTime}
          </div>
        </div>
      </div>
    );
  };

export default MsgBoxCompo;