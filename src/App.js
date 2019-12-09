import React, {Component} from "react";
import Menu from "./Menu";
//import './css/main.css';

class App extends Component {
    render() {
        return (
            <div>
                <header className="entry-header">
                    <div className="inner">
                        <Menu name="Parallax"/>
                    </div>
                </header>
            </div>
        )
    }
}

export default App;