import React from 'react'
import { HoverMenuDisplay, Menu } from './styles';

export const HoverMenu = () => {
  return (
    <div>
      <HoverMenuDisplay>
        <Menu>Philosophy</Menu>
        <Menu>History</Menu>
        <Menu>IR</Menu>
        <Menu>News</Menu>
        <Menu>Contact US</Menu>
      </HoverMenuDisplay>
      <HoverMenuDisplay>
        <Menu>STCO</Menu>
        <Menu>Diems</Menu>
        <Menu>Codi Gallery</Menu>
        <Menu>ZERO LOUNGE</Menu>
      </HoverMenuDisplay>
      <HoverMenuDisplay>
        <Menu>People</Menu>
        <Menu>Culture</Menu>
        <Menu>Welfare</Menu>
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