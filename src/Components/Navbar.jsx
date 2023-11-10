import { Badge, Stack } from '@mui/material'
import React from 'react'
import './Navbar.css'
import { Search, PersonOutline, FavoriteBorder, ShoppingBag } from '@mui/icons-material';
import HamburgerIcon from '../Icons/Hamburger';
import WhatsappIcon from '../Icons/WhatsappIcon';


export default function Navbar() {
  return (
    <Stack className="NavBar">
      <Stack className='Container Desktop'>
        <div className='Header'>
          <Stack direction={"row"} sx={{width:"33%"}} className="HeaderLeft">
            <ul>
              <li className='Icon'><Search/></li>
              <li>clothing</li>
              <li>about</li>
              <li>featured</li>
            </ul>
          </Stack>
          <div className="HeaderLogo">
            <a href="/"><img src="https://cdn11.bigcommerce.com/s-jwvqem1yf3/images/stencil/original/image-manager/kayfi-bilingual-logotype-red.png" alt="" width="192" height="36"/></a>
          </div>
          <Stack sx={{width:"33%"}} justifyContent={"center"} direction={"row"} className="HeaderRight">
            <ul>
              <li>English</li>
              <li>AED</li>
              <li className='TextWithIcon AccountIcon'>account<PersonOutline/></li>
              <li className='TextWithIcon'>wishlist<FavoriteBorder/></li>
              <li className='TextWithIcon'>bag<Badge badgeContent={4} sx={{"& .MuiBadge-badge":{top:"-2px",background:"#333",color: "#fff"}}}><ShoppingBag/></Badge></li>
            </ul>
          </Stack>
        </div>
      </Stack>
      <Stack className='Container Mobile'>
        <div className='Header' style={{justifyContent:"space-between",padding:0}}>
          <Stack direction={"row"} sx={{minWidth:"80px"}} className="HeaderLeft">
            <ul>
              <li className='Icon'><HamburgerIcon/></li>
            </ul>
          </Stack>
          <div className="HeaderLogo">
            <a href="/"><img src="https://cdn11.bigcommerce.com/s-jwvqem1yf3/images/stencil/original/image-manager/kayfi-bilingual-logotype-red.png" alt="" width="192" height="36"/></a>
          </div>
          <Stack justifyContent={"end"} sx={{minWidth:"80px"}} direction={"row"} className="HeaderRight">
            <ul>
              <li className='Icon'><Search/></li>
              <li className='Icon'><WhatsappIcon/></li>
            </ul>
          </Stack>
        </div>
      </Stack>
    </Stack>
  )
}
