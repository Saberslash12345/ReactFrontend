
const navLinkStyles = {
    backgroundColor: '#ffffff',
    color: '#3b8923',
    border: '1px solid green'
};

const styles = ({

  NavigationItem: {
    margin: '10px 0',
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    '@media (min-width: 500px)': {
        margin: '0',
        display: 'flex',
        height: '100%',
        width: 'auto',
        alignItems: 'center'
    },
'& a' : {

    textDecoration: 'none',
    width: '100%',
    boxSizing: 'border-box',
    '@media (min-width: 500px)': {
        color: 'white',
        height: '100%',
        padding: '16px 10px',
        borderBottom: '4px solid transparent'
    },
    display: 'block',
    '&:hover': {
        color: 'white',
        '@media (min-width: 500px)': navLinkStyles
    },
    '&:active': {
        color: 'white',
        '@media (min-width: 500px)': navLinkStyles
    },
    '&.active': {
        color: 'white',
        '@media (min-width: 500px)': navLinkStyles
    }
  }
}
});

export default styles;
