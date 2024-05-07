import React from 'react'
import { HoverMenuDisplay, Menu } from './styles';
import { useNavigate } from 'react-router-dom';

export const HoverMenu = ({ isHovered }: { isHovered: any }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: isHovered ? 'flex' : 'none' }}>
      <HoverMenuDisplay>
        <Menu onClick={() => navigate('/company/IR')}>IR</Menu>
        <Menu onClick={() => navigate('/company/news')}>News</Menu>
      </HoverMenuDisplay>
      <HoverMenuDisplay>

      </HoverMenuDisplay>
      <HoverMenuDisplay>
        
      </HoverMenuDisplay>
      <HoverMenuDisplay>
        <Menu onClick={() => navigate('/recruit/apply')}>Apply</Menu>
        <Menu onClick={() => navigate('/recruit/job')}>Job Preview</Menu>
        <Menu onClick={() => navigate('/recruit/faq')}>FAQ</Menu>
      </HoverMenuDisplay>
      <HoverMenuDisplay>
      </HoverMenuDisplay>
    </div>
  )
}

export default React.memo(HoverMenu);