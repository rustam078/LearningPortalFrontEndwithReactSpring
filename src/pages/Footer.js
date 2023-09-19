import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer
        className='text-muted p-2 '
        style={{
            'position': 'fixed',
            'left': 0,
            'bottom': '5px',
            'width': '100%',
            'textAlign': 'center'
        }}
    >All rights reserved &#169;JwtAuth-2023
    </footer>
</div>
  )
}

export default Footer;