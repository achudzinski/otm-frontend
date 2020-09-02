import * as React from 'react';

import {Route, Switch} from "react-router-dom";
import {routeToHomePage, routeToTasksList} from "../../services/urlManager";
import {TasksListPage} from "../pages/TasksListPage";
import "./App.scss";

export const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact={true} path={routeToTasksList}>
                    {(params) => {
                        console.log(params.match);
                        const selectedListId = params.match ? parseInt(params.match.params.listId) : null;
                        return <TasksListPage selectedListId={selectedListId}/>;
                    }}
                </Route>
                <Route exact={true} path={routeToHomePage}>
                    <TasksListPage selectedListId={null}/>
                </Route>
            </Switch>
        </div>
    );
};
