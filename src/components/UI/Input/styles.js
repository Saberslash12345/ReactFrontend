const styles = ({
  Input: {
    width: '100%',
    padding: 10,
    boxSizing: 'border-box',
  },

  Label: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: 8,
  },

  InputElement: {
    outline: 'none',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    font: 'inherit',
    padding: '6px 10px',
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    '&:focus': {
      outline: 'none',
      backgroundColor: '#ccc',
    }
  },
  
  Invalid: {
    border: '1px solid red',
    backgroundColor: '#FDA49A',
  }

})

export default styles;