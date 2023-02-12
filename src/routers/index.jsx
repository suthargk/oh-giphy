import { createBrowserRouter } from 'react-router-dom';
import App from "../App";
import PageNotFound from '../components/ErrorElement/PageNotFound';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: 'search',
                element: <div>Search</div>
            },
            {
                path: 'trending',
                element: <div>Trending</div>
            }
        ]
    }
])