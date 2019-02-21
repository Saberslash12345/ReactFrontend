const styles = ({
  NavigationItems: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: '100%',
  },

  '@media(min-width: 500px)': {
    NavigationItems: {
      flexFlow: 'row',
    }
  }
})

export default styles;