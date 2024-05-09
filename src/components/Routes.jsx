import { Routes, Route } from 'react-router-dom';
import Answer from '../pages/post/Answer';
import UserList from '../pages/post/UserList';
import HomePage from '../pages/homepage/HomePage';



const RoutesComponent = () => {
    return (
        <Routes>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/post/:userId/answer" component={Answer}></Route>
            <Route path="/list" component={UserList}></Route>
        </Routes>       
    )
}

export default RoutesComponent;