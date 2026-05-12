import '/src/styles/global/variable.css';
import '/src/styles/global/global.css';
import '/src/styles/components/Navigation.css';
import '/src/styles/components/Footer.css';

import {BrowserRouter as Router} from 'react-router-dom';
import {AuthProvider, PurchaseProvider} from "./context";
import AppRouter from "./components/AppRouter.jsx";

function App() {
    return (
        <AuthProvider>
            <PurchaseProvider>
            <Router>
                <div className="app-wrapper">
                    <AppRouter/>
                </div>
            </Router>
            </PurchaseProvider>
        </AuthProvider>
    )
}

export default App;