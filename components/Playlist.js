function Playlist({ playLists }) {
  return (
    <>
      {playLists.map((item) => (
        <p key={item.id} className="cursor-pointer hover:text-white">
          {item.name}
        </p>
      ))}
    </>
  );
}

export default Playlist;
