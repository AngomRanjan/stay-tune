import '../css/Header.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import MicIcon from '@mui/icons-material/Mic';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();

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
          <ArrowBackIcon
            fontSize="medium"
            onClick={() => navigate('/')}
          />
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
