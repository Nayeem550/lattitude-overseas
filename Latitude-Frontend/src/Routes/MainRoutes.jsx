import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';
import ApplyPage from '../Pages/ApplyPage';
import DashboardPage from '../Pages/DashboardPage';
import ApplicationDetailsPage from '../Pages/ApplicationDetailsPage';
import TrackApplicationPage from '../Pages/TrackApplicationPage';
import EditApplicationPage from '../Pages/EditApplicationPage';
import PaymentPage from '../Pages/PaymentPage';
import ProtectedRoute from '../Components/ProtectedRoute';
const ROUTES = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'apply',
                element: <ApplyPage />,
            },
            {
                path: 'admin',
                element: (
                    <ProtectedRoute>
                        <DashboardPage />{' '}
                    </ProtectedRoute>
                ),
            },
            {
                path: 'application/:applicationId',
                element: <ApplicationDetailsPage />,
            },
            {
                path: '/track-application/:passportNumber',
                element: <TrackApplicationPage />,
            },
            {
                path: '/edit-application/:applicationID',
                element: <EditApplicationPage />,
            },
            {
                path: '/payment/:applicationID',
                element: <PaymentPage />,
            },
        ],
    },
]);

export default function MainRoutes() {
    return <RouterProvider router={ROUTES} />;
}
