import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-white text-black p-4 rounded-3xl">
        Props with Tailwind
      </h1>
      <Card
        imgLink="https://a-static.besthdwallpaper.com/kazuto-kirigaya-sword-art-online-wallpaper-2048x1536-1331_26.jpg"
        animeName="Sword Art Online"
        cName="Kazuto Kirigaya"
      />
      <Card
        imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAaP5Tnju2pWDU3wOMkpjTvP847ARWgLbMg&s"
        animeName="Sword Art Online"
        cName="Asuna Yuuki"
      />
    </>
  );
}

export default App;
