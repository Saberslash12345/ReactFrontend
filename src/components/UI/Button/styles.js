
const styles = ({
  Button: {
    backgroundColor: '#3b8923',
    color: '#ffffff',
    outline: 'none',
    cursor: 'pointer',
    font: 'inherit',
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
    borderRadius: 5,
    justifyContent: 'center',
    textAlign: 'center',
    
    '&:hover': {
      backgroundColor: 'white',
      color: '#3b8923',
    },
    '&:first-of-type': {
      marginLeft: 0,
    },

    '&:disabled': {
      color: '#ffffff',
      cursor: 'not-allowed',
    }

},

Success: {
    color: '#ffffff',
},

Danger: {
    color: '#944317',
}
})

export default styles;