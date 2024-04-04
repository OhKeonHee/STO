import React from 'react'
import { HoverMenuDisplay, Menu } from './styles';
import { useNavigate } from 'react-router-dom';

export const HoverMenu = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HoverMenuDisplay>
        <Menu onClick={() => navigate('/company/IR')}>IR</Menu>
        <Menu onClick={() => navigate('/company/news')}>News</Menu>
      </HoverMenuDisplay>
      <HoverMenuDisplay>

      </HoverMenuDisplay>
      <HoverMenuDisplay>
        
      </HoverMenuDisplay>
      <HoverMenuDisplay>
        <Menu>Apply</Menu>
        <Menu>Job Preview</Menu>
        <Menu>FAQ</Menu>
      </HoverMenuDisplay>
      <HoverMenuDisplay>
      </HoverMenuDisplay>
    </div>
  )
}

export default React.memo(HoverMenu);