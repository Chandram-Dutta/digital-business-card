import "./App.css";

function App() {
  return (
    <div className="App">
      <Card></Card>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <ProfileImage></ProfileImage>
      <Info></Info>
      <About></About>
      <Interests></Interests>
      <Footer></Footer>
    </div>
  );
}

function ProfileImage() {
  return <img src="/profile_image.jpeg" alt="Chandram Dutta"></img>;
}

function Info() {
  return (
    <div className="info">
      <h2>Chandram Dutta</h2>
      <p>Student & Developer</p>
      <a
        class="info-link"
        href="https://chandramdutta.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        <small>chandramdutta.me</small>
      </a>
      <div className="buttons">
        <button
          onClick={() => window.open("mailto:chandramdutta2004@gmail.com")}
        >
          Email
        </button>
        <button
          onClick={() =>
            window.open("https://www.linkedin.com/in/chandram-dutta-0aba33227/")
          }
        >
          LinkedIn
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="details">
      <h3>About</h3>
      <p>
        I am a student and a developer. I am currently a freshman at the Vellore
        Institute of Technology. I am an application developer with expertise in
        Flutter & SwiftUI. I am also a web developer with knowledge of ReactJS,
        Astro and Svelte. Sometimes I also play with hardware and embedded
        programming.
      </p>
    </div>
  );
}
function Interests() {
  return (
    <div className="details">
      <h3>Interests</h3>
      <p>
        Flutter, SwiftUI, ReactJS, Astro, Svelte, Cycling, Swimming, Guitar,
        Coffee, Apple, Linux, Open Source, Hardware, Embedded Programming.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.facebook.com/profile.php?id=100079181534383"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/Facebook Icon.png" alt="Facebook Logo"></img>
      </a>
      <a
        href="https://www.github.com/Chandram-Dutta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/GitHub Icon.png" alt="Github Logo"></img>
      </a>
      <a
        href="https://www.instagram.com/chandram.dutta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/Instagram Icon.png" alt="Instagram Logo"></img>
      </a>
      <a
        href="https://www.twitter.com/ChandramDutta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/Twitter Icon.png" alt="Twitter Logo"></img>
      </a>
    </div>
  );
}

export default App;
