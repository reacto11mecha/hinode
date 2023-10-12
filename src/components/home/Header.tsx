export const Header = () => {
  return (
    <header className="h-screen bg-cover bg-header">
      <div className="backdrop-brightness-50 w-full h-full flex justify-center items-center md:justify-start md:items-end md:pb-20 md:pl-10">
        <h1 className="flex flex-col gap-5 text-center font-bold text-white text-7xl md:text-left md:gap-7">
          <span className="font-zenka [text-shadow:_10px_0_rgba(0,0,0,.4)]">
            日の出
          </span>
          <span className="font-zenka [text-shadow:_10px_0_rgba(0,0,0,.4)]">
            へ ようこそ！☆
          </span>
        </h1>
      </div>
    </header>
  );
};
