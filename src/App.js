import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import { DISHES } from '.shared/dishes';
import Menu from './components/MenuComponents';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { dishes: DISHES };
  }

  render(){
    return (
      <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Pastoral Restaurant</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} />
        </div>
    );
}
}

export default App;
