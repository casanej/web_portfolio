import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, PalletModel, theme } from '../assets';
import { Header, Resume } from '../components';
import { useStores } from '../stores';


interface Props { }

const HomeApp = (props: Props) => {
    const { teste } = useStores();
    const [currentTheme, setCurrentTheme] = useState<PalletModel>(theme.pallet.dark); 

    useEffect(() => {
        console.log('[HomeApp] Started with success');
    });

    useEffect(() => {
        console.log("[FLIP THEME]")
    }, [window.__theme__.type])

    const setNewTheme = (themeString: string) => {
        switch(themeString) {
            case 'dark': setCurrentTheme( theme.pallet.dark ); break;
            case 'light': setCurrentTheme( theme.pallet.light ); break;
        }
    }

    return (
        <React.Fragment>
            <ThemeProvider theme={currentTheme} >
                <React.Fragment>
                    <GlobalStyle theme={currentTheme} />
                    <Router>
                        <Switch>
                            <Route path='/resume' component={Resume} />
                            {/* <Header /> */}
                            <Route path='/'>
                                {/* <div style={{color: currentTheme.primaryColor, backgroundColor: currentTheme.backgroundColor}} >HomeApp</div>
                                
                                <button onClick={() => setNewTheme('dark')} >DARK</button>
                                <button onClick={() => setNewTheme('light')} >LIGHT</button> */}
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                                    <h1 style={{margin: '10px 0', fontWeight: 'normal'}}>NOVO WEB PORTFOLIO EM CONSTRUÇÃO</h1>
                                    <h1 style={{margin: '10px 0', fontWeight: 'normal'}}>NEW WEB PORTFOLIO UNDER CONSTRUCTION</h1>
                                    <h1 style={{margin: '10px 0', fontWeight: 'normal'}}>NUEVO PORTAFOLIO WEB EN CONSTRUCCIÓN</h1>
                                    <h1 style={{margin: '10px 0', fontWeight: 'normal'}}>NUEVO PORTAFOLIO WEB EN CONSTRUCCIÓN</h1>
                                </div>
                            </Route>
                        </Switch>
                    </Router>
                </React.Fragment>
            </ThemeProvider>
        </React.Fragment>
    );
};

export { HomeApp };