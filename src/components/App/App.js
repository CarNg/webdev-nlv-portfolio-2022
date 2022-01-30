import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//CSS
import '../../index.css';

//Components
import Main from '../../routes/Main';

function App() {
  return (
	<Router>
		<Routes>
			<Route exact path="/" element={<Main/>}/>
		</Routes>
	</Router>
  );
}

export default App;
