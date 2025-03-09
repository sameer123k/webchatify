import { Box } from '@mui/material'
import React from 'react';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MessageIcon from '@mui/icons-material/Message';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DP1 from '../images/dp.webp';
import DP2 from '../images/dp2.jfif';
import DP3 from '../images/dp3.jfif';
import DP4 from '../images/dp5.jfif';
import Community from '../images/community.png';
import Button from '@mui/material/Button';
import Logo from '../images/logo.png';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function sidebar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  return (
    <Box class="Sidebar">
      <Box class="sidebar-head">
        <img src={Logo} alt='loog' height={28} />
        <Box>
          <a href="#"><MissedVideoCallIcon /></a>
          <a href="#"><AddCircleOutlineIcon /></a>
        </Box>
      </Box>
      <Box class="searchBar">
        <input type="text" placeholder='Search Here...' />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </Box>
      <Box class="tabs-section">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label={<MessageIcon />} {...a11yProps(0)} />
              <Tab label={<PeopleAltIcon />} {...a11yProps(1)} />
              <Tab label={<DonutLargeIcon />} {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0} padding={0}>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Mahesh Kumar Singh</h5>
                  <p> i call you later ...</p>
                </Box>
                <Box>
                  <span>9:33pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5>John Doe</h5>
                  <p> can we talk together... </p>
                </Box>
                <Box>
                  <span>7:53pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Rahul Tripathi </h5>
                  <p> busy right now ... </p>
                </Box>
                <Box>
                  <span>6:55pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Aakash Verma </h5>
                  <p> am driving right now... </p>
                </Box>
                <Box>
                  <span>9:33pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Sonika Sharma </h5>
                  <p> cooking right now...</p>
                </Box>
                <Box>
                  <span>9:33pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Sonu Sharma </h5>
                  <p> where are you from send...</p>
                </Box>
                <Box>
                  <span>9:33pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Nitesh </h5>
                  <p> out of state can we talk... </p>
                </Box>
                <Box>
                  <span>9:33pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5>John Doe</h5>
                  <p> can we talk together... </p>
                </Box>
                <Box>
                  <span>7:53pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Rahul Tripathi </h5>
                  <p> busy right now ... </p>
                </Box>
                <Box>
                  <span>6:55pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Aakash Verma </h5>
                  <p> am driving right now... </p>
                </Box>
                <Box>
                  <span>9:33pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Rahul Tripathi </h5>
                  <p> busy right now ... </p>
                </Box>
                <Box>
                  <span>6:55pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Aakash Verma </h5>
                  <p> am driving right now... </p>
                </Box>
                <Box>
                  <span>9:33pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Sonika Sharma </h5>
                  <p> cooking right now...</p>
                </Box>
                <Box>
                  <span>9:33pm</span>
                </Box>
              </Box>
            </Box>
            <Box class="messageBox">
              <AccountCircleIcon />
              <Box class="chatHeadings">
                <Box>
                  <h5> Sonu Sharma </h5>
                  <p> where are you from send...</p>
                </Box>
                <Box>
                  <span>9:33pm</span>
                </Box>
              </Box>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box class="community">
              <img src={Community} alt='community' />
              <h5> Stay Connected with Community</h5>
              <p>Embrace the power of community by staying engaged and fostering meaningful relationships. Whether through local events, online groups, or social networks, staying connected helps build support, share ideas, and create lasting bonds that enrich our lives.</p>
              <Button variant="contained" disableElevation>
                Start Your Community
              </Button>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Box class="status">
              <Box class="status1">
                <img src={DP1} alt="dp1" />
                <Box>
                  <h5> Sandeep Jaiswal </h5>
                  <p> Today at 6:44pm </p>
                </Box>
              </Box>
              <Box class="status1">
                <img src={DP2} alt="dp2" />
                <Box>
                  <h5> Sonika Sharma </h5>
                  <p> Today at 2:37pm </p>
                </Box>
              </Box>
              <Box class="status1">
                <img src={DP3} alt="dp2" />
                <Box>
                  <h5> Manisha Gupta </h5>
                  <p> Today at 5:17pm </p>
                </Box>
              </Box>
              <Box class="status1">
                <img src={DP4} alt="dp2" />
                <Box>
                  <h5> Rakesh Yadav </h5>
                  <p> Today at 9:42pm </p>
                </Box>
              </Box>
            </Box>
          </CustomTabPanel>
        </Box>
      </Box>

    </Box>
  )
}
