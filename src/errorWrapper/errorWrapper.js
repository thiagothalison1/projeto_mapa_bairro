import React from 'react'
import './errorWrapper.css'

export default class ErrorWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error, info) {
        console.log(error, info)
      }
    
      render() {
        if (this.state.hasError) {
          // This error message is presented to the user when
          // it is not possible to render the map.
          return  <div className='error-area'>
                    <h1><img alt='Sad Face' src='./img/sad_face.png' className='sad-face' /> Não foi possível carregar o mapa.</h1>
                    <h3>Por favor, Verifique sua conexão com a internet.</h3>
                  </div>
        }
    
        return this.props.children; 
      }
}
  