import logo from './logo.svg';
import './App.css';

let i = 0;
i = i.toString();

function App() {
  return (
    <div className="container text-center content-bg col-6">
      <h1>HAPPY BIRTHDAY CAM!!!</h1>
      <h3>We got you possum memes!</h3>
      <img src={"https://res.cloudinary.com/drz0iulpo/image/upload/v1701149933/camday/camday_0" + i + ".jpg"} />
    </div>
  );
}

export default App;
