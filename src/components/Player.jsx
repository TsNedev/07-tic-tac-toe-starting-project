export default function Player({name,symbol}){
    return <li>
    <span className="Player">
    <span className="player-name">{name}</span>
  <span className="player-symbol">{symbol}</span>
  <button>Edit</button>
  </span>
  </li>
}