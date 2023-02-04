import logo from './logo.svg';
import './App.css';
import { BiRefresh, BiCheck, BiPlusCircle } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { RxExit } from "react-icons/rx";

function App() {
  return (
    <div>
      <div className="container m-auto flex flex-row justify-between" style={{}}>
        <h1>MIT Matrix list administration</h1>
        <img />
      </div>
      <div className="container m-auto flex flex-col">
        <p className="basis-1/8">Note: This is not to manage mailing lists, only to manage the corresponding group chats in MIT Matrix. If you'd like to manage them instead, go to <a href="https://webmoira.mit.edu">WebMoira</a>.</p>
        <div className="basis-7/8 flex flex-row">
          <div className="basis-1/2 flex flex-col p-4">
            <div className="basis-1/4 flex flex flex-row justify-between">
              <span>Lists I am in</span>
              <BiRefresh/>
            </div>
            <div className="basis-1/4">
              <span>Not joined</span>
              <div className="flex flex-row justify-between">
                <span># miters</span>
                <FiUserPlus/>
              </div>
              <div className="flex flex-row justify-between">
                <span># mtg</span>
                <span>Invited</span>
              </div>
            </div>
            <div className="basis-1/4">
              <span>Joined</span>
              <div className="flex flex-row justify-between">
                <span># code-for-good</span>
                <RxExit/>
              </div>
              <div className="flex flex-row justify-between">
                <span># sipb</span>
                <RxExit/>
              </div>
              <div className="flex flex-row justify-between">
                <span># ydsa</span>
                <RxExit/>
              </div>
            </div>
            <div className="basis-1/4">
              <span>Other mailing lists</span>
              <p>Your other mailing lists have not opted into having a group chat on MIT Matrix. Ask the list owners (normally your exec team) to do so.</p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col p-4">
            <div className="basis-1/5 flex flex flex-row justify-between">
              <span>Lists I can administer</span>
              <BiRefresh/>
            </div>
            <div className="basis-1/5">
              <span>Already opted in</span>
              <div className="flex flex-row justify-between">
                <span># sipb</span>
                <BiCheck/>
              </div>
            </div>
            <div className="basis-1/5">
              <span>Other lists</span>
              <div className="flex flex-row justify-between">
                <span># ex-discuss</span>
                <BiPlusCircle/>
              </div>
              <div className="flex flex-row justify-between">
                <span># sipb-uplink-team</span>
                <BiPlusCircle/>
              </div>
            </div>
            <div className="basis-1/5">
              <span>Missing a list?</span>
              <p>Only Moira lists are supported, not Mailman lists.</p>
            </div>
            <div className="basis-1/5">
              <span>Need more help?</span>
              <p>If you don't see what you need, reach out at matrix@mit.edu.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;