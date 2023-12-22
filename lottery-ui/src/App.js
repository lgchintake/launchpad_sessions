import { useEffect, useState } from "react";
import lottery from "./lottery";
import web3 from "./web3";

function App() {
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [entryAmount, setEntryAmount] = useState();
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [winner, setWinner] = useState("");

  const enterToLottery = async () => {
    const accounts = await web3.eth.getAccounts();
    await lottery.methods
      .enter()
      .send({
        from: accounts[0],
        value: web3.utils.toWei(entryAmount, "ether"),
      })
      .then((entryResponse) => {
        //console.log(entryResponse);
        setShowSuccess(true);
        setEntryAmount(null);
      })
      .catch((entryError) => console.log);
  };

  const init = async () => {
    setManager(await lottery.methods.manager().call());
    setPlayers(await lottery.methods.getPlayers().call());
    const contractBalance = await web3.eth.getBalance(lottery.options.address);
    setBalance(web3.utils.fromWei(contractBalance, "ether"));
    const accounts = await web3.eth.getAccounts();
    setCurrentUser(accounts[0]);
  };

  const pickWinner = async () => {
    // call a contract and pick a winner
    const accounts = await web3.eth.getAccounts();
    await lottery.methods
      .winnerPicker()
      .send({from: accounts[0]})
      .then((response) => console.log)
      .catch((error) => console.log);
    //setWinner("Laxminarayan");
  };
  
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (entryAmount != 0.01) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [entryAmount]);

  return (
    <div className="container">
      <h2>Lottery Contract</h2>
      <p> Contract's manager: {manager}</p>
      <p>
        The total players entered in lottery <b>{players.length}</b> and amount
        in this lottery is <b>{balance} ether</b>
      </p>
      <h4>Try your luck</h4>
      <p>
        <label>Amount of Ether to enter </label> &nbsp;
        <input onChange={(e) => setEntryAmount(e.target.value)} type="number" />
        &nbsp;
        <label
          className={showError ? "invalid-feedback" : "invalid-feedback d-none"}
        >
          Value should be 0.01 ether
        </label>
      </p>
      {showSuccess && (
        <div className="alert alert-success alert-dismissible" role="alert">
          You have successfully entered in lottery!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => window.location.reload(false)}
          ></button>
        </div>
      )}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => enterToLottery()}
        disabled={showError}
      >
        Enter in Lottery
      </button>
      <hr />
      <div>
        <h3>Players</h3> <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player Address</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{player}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      {currentUser && manager && currentUser == manager && (
        <div>
          <h3>Manager Activities</h3>
          <button className="btn btn-secondary" onClick={() => pickWinner()}>
            Pick a winner
          </button>
          <br />
          <br />
          {winner && (
            <div className="alert alert-success alert-dismissible" role="alert">
              Winner : {winner}!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => window.location.reload(false)}
              ></button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
