import {Component} from 'react'
import './index.css'

let result = 'heads'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
  }

  onChangeTossStatus = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      result = 'heads'
    } else {
      result = 'tails'
    }

    if (result === 'heads') {
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
    } else {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }
  }

  displayHeadsResult = () => {
    const {headsCount, tailsCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="content-container">
            <h1 className="main-heading">Coin Toss Game</h1>
            <p className="toss-results">Heads (or) Tails</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="heads-image"
              alt="toss result"
            />
            <div>
              <button
                className="button"
                type="button"
                onClick={this.onChangeTossStatus}
              >
                Toss Coin
              </button>
            </div>
            <div className="count-status-container">
              <p className="count">Total: {headsCount + tailsCount}</p>
              <p className="count">Heads: {headsCount}</p>
              <p className="count">Tails: {tailsCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  displayTailsResult = () => {
    const {headsCount, tailsCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="content-container">
            <h1 className="main-heading">Coin Toss Game</h1>
            <p className="toss-results">Heads (or) Tails</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="heads-image"
              alt="toss result"
            />
            <div>
              <button
                className="button"
                type="button"
                onClick={this.onChangeTossStatus}
              >
                Toss Coin
              </button>
            </div>
            <div className="count-status-container">
              <p className="count">Total: {headsCount + tailsCount}</p>
              <p className="count">Heads: {headsCount}</p>
              <p className="count">Tails: {tailsCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return result === 'heads'
      ? this.displayHeadsResult()
      : this.displayTailsResult()
  }
}

export default CoinToss
