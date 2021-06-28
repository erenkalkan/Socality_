import "./App.css";
import { Sidenav, Nav, Icon, Dropdown, Badge } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {datas} from "./datas.js"
import { Panel, PanelGroup } from 'rsuite';

function App() {
  const headerStyles = {
    padding: 20,
    fontSize: 25,
    background: "#808080",
    color: "#fff",
    fontWeight: "bold",
  };

  const LeftBart = {
    width: "70px",
    background: "#D3D3D3",
    display: "flex",
    padding: "15px",
    alignItems: "start",
    flexDirection: "column",
    cursor: "pointer",
  };

  const Maincontainer = {
    width: "300px",
    height: "100%",
    display: "flex",
    position: "relative",
  };
  const RightbBar = {
    width: 250,
    background: "#C8C8C8",
  };

  const containerSideBarLeftFirstChild = {
    width: "50px",
    height: "50px",
    fontSize: "30px",
  };

  const allFieldStyles = {
    height: "100%",
    position: "fixed",
    width: "100%",
    display: "flex",
    backgroundColor: "#B0B0B0",
  };

  const ContentMenuDetails = {
    alignItems: "center", 
    justifyContent: "space-between",
    width: "366px",
    height: "427px",
    border:"1px solid black",
    borderRadius:"5px",
    flexDirection:'row',
    flexWrap: 'wrap',
    position: "absolute"
  }

  //DO IGNORE
  // const Instance = () => {
  //   return(
  //     <>
  //     <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
  //     <img src="https://via.placeholder.com/240x240" marginTop="20px" height="240" />
  //     <Panel header="RSUITE">
  //       <p>
  //         <small>
  //           A suite of React components, sensible UI design, and a friendly development experience.
  //         </small>
  //       </p>
  //     </Panel>
  //   </Panel>
  //     </>
  //   )};

  const ClickState = () => {
    // const [items , setItems] = useState([]);
    const fethData = datas;
    const getItems = fethData
    const alldatas = getItems.posts_by_date["2021-06-17"];
    console.log(alldatas);

    return ( 
      <React.Fragment>
      <div className="ContentMenu" style={{ margin: "1px", display: "flex" }} key="1">
      <div className="ContentMenuDetails" style={ContentMenuDetails}>
      <div className="LeftStyleDetails" style={{display:'flex', width:"30px", height:"100%", border: "1px solid black"}}>
        <div className="LeftStyleDetailsIcon" style={{display:"flex", width:"100%", height:"100%", justifyContent:"center", alignItems:"center", position:"relative"}}>
          <Icon icon="facebook" style={{justifyContent: "center", alignItems: "center"}} />
        </div>
      </div>
      </div>
      <div className="ContentMenuDetailsContent" style={{display:"flex",marginLeft: "30px", width:"335px", height:"50px", border: "1px solid black", justifyContent:"flex-start", alignItems:"center", position:"absolute"}}>
      </div>
      <div className="ContentMenuDescription" style={{display:"flex", marginTop:"50px", marginLeft: "30px", width:"335px", height:"80px", border: "1px solid black", justifyContent:"center", alignItems:"center",position:"absolute"}}>
        {console.log("Eren")}
         Date
      </div>
      <div className="ContentMenuPicture" style={{display:"flex", marginTop:"130px", marginLeft: "30px", width:"335px", height:"250px", border: "1px solid black", justifyContent:"center", alignItems:"center",position:"absolute"}}>
        Picture
      </div>
      <div className="ContentMenuStatistics" style={{display:"flex", marginTop:"380px", marginLeft: "30px", width:"335px", height:"47px", border: "1px solid black", justifyContent:"center", alignItems:"center",position:"absolute"}}>
        Statistics
      </div>
      {console.log("Eren Kalkan")}
    </div> 
      </React.Fragment>
    );
  };

  const fethData = datas;
  const getItems = fethData
  const alldatas = getItems.posts_by_date["2021-06-17"];
  console.log(alldatas);

  const RoutePage = () => {
    return (
      <>
        <Router>
          <div className="card_contens" style={{padding: '95px'}}>
            <nav>
                  <Link to="/feed"></Link>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/feed">
                <ClickState />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  };
  return (
    <>
      <div className="allField" style={allFieldStyles}>
        <div className="containerBar" style={Maincontainer}>
          <div className="containerSideBarLeft" style={LeftBart}>
            <div
              className="containerSideBarLeftFirstChild"
              style={containerSideBarLeftFirstChild}
            >
              <Icon icon="cc-visa" style={containerSideBarLeftFirstChild} />
            </div>
            <div className="containerSideBarLeftSecondChild">
              <Icon icon="amazon" style={containerSideBarLeftFirstChild} />
            </div>
            <div className="containerSideBarLeftThirdChild">
              <Icon icon="paypal" style={containerSideBarLeftFirstChild} />
            </div>
            <div className="containerSideBarLeftFourthChild">
              <Icon
                icon="youtube-play"
                style={containerSideBarLeftFirstChild}
              />
            </div>
            <div className="containerSideBarLeftFifthChild">
              <Icon icon="windows" style={containerSideBarLeftFirstChild} />
            </div>
            <div className="containerSideBarLeftSixthChild">
              <Icon icon="wordpress" style={containerSideBarLeftFirstChild} />
            </div>
          </div>
          <div style={RightbBar} className="containerSideBarRight">
            <Sidenav>
              <Sidenav.Header>
                <div style={headerStyles}>Sociality.io</div>
              </Sidenav.Header>
              <Sidenav.Body style={{ background: "#C8C8C8" }}>
                <Nav>
                  <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                  <a href="/">Home</a>
                   {/* <Router><Link to="/">Home</Link></Router> */}
                  </Nav.Item>
                  <Nav.Item eventKey="2" icon={<Icon icon="bell" />}>
                    Notifications{" "}
                    <Badge content="99+" style={{ fontSize: "14px" }} />
                  </Nav.Item>
                  <Dropdown
                    eventKey="3"
                    title="Summary"
                    icon={<Icon icon="magic" />}
                  >
                    <Dropdown.Item divider />
                    <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                    <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                    <Dropdown.Item divider />
                  </Dropdown>
                  <Dropdown
                    eventKey="4"
                    title="Publish"
                    icon={<Icon icon="magic" />}
                    className="publish"
                  >
                    <Dropdown.Item divider />
                    <Dropdown.Item eventKey="4-1">Compose</Dropdown.Item>
                    <Dropdown.Item
                      eventKey="4-2"
                      className="publishSecondChild"
                      onClick={RoutePage}
                    >
                      <a href="/feed">Feed</a>
                      {/* <Router><Link to="/feed">Feed</Link></Router> */}
                    </Dropdown.Item>
                    <Dropdown.Item divider />
                  </Dropdown>
                  <Dropdown
                    eventKey="5"
                    title="Engage"
                    icon={<Icon icon="comments-o" />}
                  >
                    <Dropdown.Item divider />
                    <Dropdown.Item eventKey="5-1">Compose</Dropdown.Item>
                    <Dropdown.Item eventKey="5-2">Feed</Dropdown.Item>
                    <Dropdown.Item divider />
                  </Dropdown>
                  <Dropdown
                    eventKey="6"
                    title="Listen"
                    icon={<Icon icon="headphones" />}
                  >
                    <Dropdown.Item divider />
                    <Dropdown.Item eventKey="6-1">Compose</Dropdown.Item>
                    <Dropdown.Item eventKey="6-2">Feed</Dropdown.Item>
                    <Dropdown.Item divider />
                  </Dropdown>
                  <Dropdown
                    eventKey="7"
                    title="Report"
                    icon={<Icon icon="bar-chart" />}
                  >
                    <Dropdown.Item divider />
                    <Dropdown.Item eventKey="7-1">Compose</Dropdown.Item>
                    <Dropdown.Item eventKey="7-2">Feed</Dropdown.Item>
                    <Dropdown.Item divider />
                  </Dropdown>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
          </div>
        </div>
        <div
          className="ContentDetail"
          style={{ display: "flex", flexDirection: "row", width: "100%", height:"100%"}}>
          <div className="Descriptions" style={{flexDirection: "row", width: "50%", position: "fixed",}}>
            <ul className="ListUl" style={{display: "flex",flexDirection: "row",alignItems: "center", justifyContent: "space-evenly", width:"100%", height:"50px"}}>
              <li className="before1">Pusblished</li>
              <li className="before2">Scheduled</li>
              <li className="before3">Need Approval</li>
              <li className="before4">Error</li>
              <li className="before5">Notes</li>
            </ul>
          </div>
          <div><br></br>
          {RoutePage()}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
