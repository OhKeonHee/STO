import React from 'react'
import { HoverMenuDisplay, Menu } from './styles';
import { useNavigate } from 'react-router-dom';

export const HoverMenu = ({ isHovered, setIsHovered }: { isHovered: boolean, setIsHovered: Function }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: isHovered ? 'flex' : 'none' }}>
      <HoverMenuDisplay>
        <Menu onClick={() => {navigate('/company/IR'); setIsHovered(false)}}>IR</Menu>
        <Menu onClick={() => {navigate('/company/news'); setIsHovered(false)}}>News</Menu>
      </HoverMenuDisplay>
      <HoverMenuDisplay>

      </HoverMenuDisplay>
      <HoverMenuDisplay>
        
      </HoverMenuDisplay>
      <HoverMenuDisplay>
        <Menu onClick={() => {navigate('/recruit/apply'); setIsHovered(false)}}>Apply</Menu>
        <Menu onClick={() => {navigate('/recruit/job'); setIsHovered(false)}}>Job Preview</Menu>
        <Menu onClick={() => {navigate('/recruit/faq'); setIsHovered(false)}}>FAQ</Menu>
      </HoverMenuDisplay>
      <HoverMenuDisplay>
      </HoverMenuDisplay>
    </div>
  )
}

export default React.memo(HoverMenu);