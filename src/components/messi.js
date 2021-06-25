import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Views
//home
//about
//contact

//React-router-dom
function Messi(){
    return(
        //Para mostrar 1 solo componente utilizamos el componente switch
        <Router>
            <div>
                <Switch>
                    <h1>React Router Dom</h1>
                    <Route path='/' exact component={App}/>
                    <Route path='/home' exact component={Servicios}/>
                    <Route path='/about' exact component={Diseños}/>
                    <Route path='/about' exact component={Galeria}/>
                    <Route path='/about' exact component={Contacto}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Messi;