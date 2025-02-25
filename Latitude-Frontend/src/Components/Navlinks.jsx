import { Button } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

const LINKS = [
    {
        name: 'Home',
        path: '/',
    },

    {
        name: 'Contact',
        path: '/contact',
    },
    {
        name: 'About',
        path: '/about',
    },
];

export default function Navlinks() {
    const location = useLocation();

    return (
        <div className="mobile-lg:w-full">
            <ul className="flex items-center gap-3 mobile-lg:flex-col mobile-lg:w-40 mobile-lg:items-start mobile-lg:justify-start ">
                {LINKS.map(link => (
                    <li key={link.name}>
                        <NavLink to={link.path} className={''}>
                            <Button
                                variant={location.pathname == link.path ? 'contained' : 'text'}
                                color={location.pathname == link.path ? 'primary' : ''}
                            >
                                {link.name}
                            </Button>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
