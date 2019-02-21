const styles = ({
  Toolbar: {
    height: 56,
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#3b8923',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    boxSizing: 'border-box',
    zIndex: 90,

    '& nav': {
      height: '100%'
    }
  },

  Footer: {
    height: 70,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: '#3b8923',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    boxSizing: 'border-box',
    zIndex: '90',
    color: '#ffffff',
    
    '& p': {
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },

Logo: {
  height: '80%',
},

'@media (max-width: 499px)':{
  DesktopOnly: {
    display: 'none'
  }
}
})

export default styles;