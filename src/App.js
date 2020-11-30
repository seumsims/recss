import logo from './logo.svg';
import './App.css';
import Cloader from './mycomponent/Cloader';
import Arrow from './mycomponent/Arrow';
import Sbox from './mycomponent/Sbox';
import Schange from './mycomponent/Schange';
import Conditional1 from './mycomponent/Conditional1';
import Conditional2 from './mycomponent/Conditional2';
import Refresh from './mycomponent/Refresh';
import Newstart from './mycomponent/Newstart';
import Finddomnode from './mycomponent/Finddomnode';
import Form from './mycomponent/Form';
import Multievent from './mycomponent/Multievent';
import Onsub from './mycomponent/Onsub';
import Signin from './mycomponent/Signin';
import Select from './mycomponent/Select';

import Text from './mycomponent/Text';
import List from './mycomponent/List';
import List2 from './mycomponent/List2';
import List3 from './mycomponent/List3';
import Jsonlist from './mycomponent/Jsonlist';
import Jsonlist2 from './mycomponent/Jsonlist2';
import styles from './Mycss.module.css';
import './My.scss';
import My from "./My";



function App() {
  return (
      <div className="App">

        <div>
          <My/>
        </div>
        <div>
          <h1 className="TextStyle3">
            SALAMOON
          </h1></div>
        <div>

          <h1 className={styles.TextStyle2}>Some</h1>
        </div>

        <div className="container border border-warning">
          <Jsonlist2/>
        </div>

        <div className="container border border-warning">
          <Jsonlist/>
        </div>

        <div className="container border border-warning">
          <List3/>
        </div>

        <div className="container border border-warning">
          <List2/>
        </div>

        <div className="container border border-warning">
          <List/>
        </div>

        <div className="container border border-warning">
          <Select/>
        </div>

        <div className="container">
          <Text/>
        </div>

        <div>
          <Signin/>
        </div>

        <div>
          <Onsub/>
        </div>

        <div>
          <Multievent/>
        </div>

        <div>
          <Form/>
        </div>

        <div>
          <Finddomnode/>
        </div>

        <div>
          <Newstart/>
        </div>

        <div>
          <Refresh/>
        </div>

        <div>
          <Conditional1/>
        </div>

        <div>
          <Conditional2/>
        </div>

        <div>
          <Schange/>
        </div>

        <div>
          <Sbox/>
          <Arrow/>
          <Cloader> </Cloader>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
