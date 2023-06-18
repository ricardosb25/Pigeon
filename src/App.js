import "./App.css";
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className="AppVideos">
        <Video
          likes={303}
          comments={207}
          shares={230}
          name="Ricardo"
          description="Gato goleiro"
          song="musica epica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes={94}
          comments={10}
          shares={57}
          name="CristianoRonaldo"
          description="Oia o Gato maluco" 
          song="musica do gato maluco"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
      </div>
    </div>
  );
}

export default App;
