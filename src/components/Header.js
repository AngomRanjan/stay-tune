import '../css/Header.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import MicIcon from '@mui/icons-material/Mic';
import { IconButton } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src={logo}
          alt=""
        />
      </div>

      <div className="header__center">
        <IconButton className="header__backArrow">
          {(location.pathname !== '/') && <ArrowBackIcon fontSize="medium" onClick={() => navigate('/')} />}
        </IconButton>
      </div>

      <div className="header__right">
        <IconButton>
          <MicIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
