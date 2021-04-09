import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation'
import { Helmet } from "react-helmet";

function App() {
    return (
        <div className="App">
            <Helmet>
                <meta charset="utf-8" />
                <title>Jem Zoo</title>
                {/* Fonts */}

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Montserrat:wght@600&family=Open+Sans&display=swap"
                    rel="stylesheet" defer></link>
                <link rel="canonical" href="http://mysite.com/example" />

                {/* Favicons */}
                <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
                <link rel="manifest" href="icons/site.webmanifest" />
                <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#00b2af" />
                <link rel="shortcut icon" href="icons/favicon.ico" />
                <meta name="msapplication-TileColor" content="#00b2af" />
                <meta name="msapplication-config" content="icons/browserconfig.xml" />
                <meta name="theme-color" content="#3e1052" />
            </Helmet>

            <Navigation />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
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
