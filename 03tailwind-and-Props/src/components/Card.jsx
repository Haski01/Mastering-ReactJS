function Card({ imgLink, animeName = "undefined", cName = "undefined" }) {
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img className="size-48 shadow-xl rounded-md" alt="" src={imgLink} />
      </div>
      <div>
        <span className="text-2xl font-medium">{animeName}</span>
        <br />
        <span className="font-medium text-sky-500">{cName}</span>
      </div>
    </div>
  );
}

export default Card;
