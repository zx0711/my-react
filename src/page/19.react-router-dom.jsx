/*
 * @Description: react-router-dom 事例
 * @Author: xiao.zhang
 * @Date: 2020-09-09 10:53:08
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2020-09-10 14:27:07
 */
import React from "react";
import {
  HashRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom";
import "./style.scss";
function Home(props) {
  console.log("Home=>", props);
  return <h2>Home</h2>;
}

function About(props) {
  console.log("About=>", props);
  return <h2>About</h2>;
}

function Users(props) {
  console.log("Users=>", props);
  return <h2>Users</h2>;
}

function Replace(props) {
  console.log("Users=>", props);
  return <h2>Replace</h2>;
}

function App() {
  return (
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/first"}>Home</Link>
            </li>
            <li>
              <Link to={"/first/about"}>About</Link>
            </li>
            <li>
              <Link to={"/first/users"}>Users</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/courses",
                  search: "?sort=name",
                  hash: "#the-hash",
                  state: { fromDashboard: true },
                }}
              >
                测试
              </Link>
            </li>
            <li>
              <Link to={(location) => `${location.pathname}?sort=name`}>
                测试function
              </Link>
            </li>
            <li>
                <Link to={"/replace"} replace>
                  replace
                </Link>
              </li>
              <li>
                <NavLink to="/fag/2" exact activeClassName="selectedzz"  activeStyle={{
                    fontWeight: "bold",
                  }}>
                  FAQs
                </NavLink>
              </li>
          </ul>
        </nav>
        {/* <Switch>通过查找所有的子<Route>并渲染与当前URL匹配的第一个<Route>的内容 */}
        <Switch>
          <Route
            path="/"
            exact
            render={() => (false ? <Redirect to="/first" /> : <div>nihao</div>)}
          />
          <Route path={"/replace"} exact>
            <Replace />
          </Route>
          <Route path={"/first"} exact>
            <Home />
          </Route>
          <Route path={"/first/about"} exact>
            <About />
          </Route>
          <Route path={"/first/users"} component={Users} exact />
          <Route path={"/fag"} component={Users} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
