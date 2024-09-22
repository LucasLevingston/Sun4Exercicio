import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
	return (
		<div className="font-mainFont">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} caseSensitive={false} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
