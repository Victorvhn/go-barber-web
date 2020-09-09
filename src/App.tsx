import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthContext.Provider value={{ name: 'Diego' }}>
      <SignIn />
    </AuthContext.Provider>
  </>
);

export default App;
