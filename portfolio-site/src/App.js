import "./styles/App.css";
import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

function App() {
  return (
    <div class="wrapper">
      <Navbar />
    </div>
  );
}

const Navbar = () => {
  return (
    <nav class="main-nav">
      <button>
        <MaterialIcon icon="code" />
        <span>Projects</span>
      </button>
      <button>
        <MaterialIcon icon="school" />
        <span>Education</span>
      </button>
      <button>
        <MaterialIcon icon="work" />
        <span>Experience</span>
      </button>
      <button>
        <MaterialIcon icon="email" />
        <span>Contact</span>
      </button>
    </nav>
  );
}

export default App;
