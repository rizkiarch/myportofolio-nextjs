import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { Call, Home, HomeRepairService, Person } from '@mui/icons-material';
import Profile from "@/components/Profile";
import Project from "@/pages/Project";
import About from "@/pages/About";
import Contactme from '@/pages/Contactme';

export default function FixedBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    React.useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
    }, []);

    const renderContent = () => {
        switch (value) {
            case 0:
                return <Profile />;
            case 1:
                return <About />;
            case 2:
                return <Project />;
            case 3:
                return <Contactme />;
            default:
                return <Profile />;
        }
    };

    const handleViewAllClick = () => {
        setShowProject(true);
    };

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <div className="mx-auto max-w-xl bg-white rounded-xl shadow-lg">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        {renderContent()}
                    </div>
                </div>
            </div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<Home />} />
                    <BottomNavigationAction label="About" icon={<Person />} />
                    <BottomNavigationAction label="Project" icon={<HomeRepairService />} />
                    {/* <BottomNavigationAction label="Contact Me" icon={<Call />} /> */}
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
