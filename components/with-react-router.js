import React from 'react';
import {BrowserRouter} from 'react-router-dom';
const isServer=typeof window==='undefined'; 


// eslint-disable-next-line import/no-anonymous-default-export
export default App=>{
 return class AppWithReactRouter extends React.Component{

    render(){
        if (isServer){
            const {StaticRouter}=require('react-router');
            return(
                <StaticRouter location={this.props.router.asPath}>
                     <App {...this.props}/>
                </StaticRouter>

            );


        }
    return (
        <BrowserRouter>
            <App {...this.props}/>
        </BrowserRouter>

    );
    }

 }

}



