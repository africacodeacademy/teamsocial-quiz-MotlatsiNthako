import {BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Africa from './Africa';
import Sports from "./Sports";
import Technology from "./Technology";

 function Category() {
    
        function Content(){

        const screenName= JSON.stringify(localStorage.getItem('player'))
        const playerName=screenName.replace('"','')
        const playername = playerName.replace('"','')

        let history = useHistory();
        const clickHandlerAfrica = () => history.push("./Africa");
        const clickHandlerSports= () =>history.push("./Sports");
        const clickHandlerTechnology = () => history.push("./Technology");
        
        return(
            <div>
            <h1>Welcome  {playername} </h1>
            <button onClick= {clickHandlerAfrica}>Africa</button>
            <button onClick= {clickHandlerSports}>Sports</button>
            <button onClick= {clickHandlerTechnology}>Technology</button>
            
            </div>
        )
        }

    return(
        <>
         <Router>
             <Switch>
                <Route path="/Africa" exact component={Africa}/>
                <Route path="/Sports" exact component={Sports}/>
                <Route path="/Technology" exact component={Technology}/>
                <Route path= "/"  component = {Content}/>
             </Switch>
         </Router>
        </>
    )

}
    
export default Category;
