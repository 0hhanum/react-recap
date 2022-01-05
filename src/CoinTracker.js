import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [selected, setSelected] = useState("");
    const [dollars, setDollars] = useState("");
    const [price, setPrice] = useState(0);
    const [result, setResult] = useState("");


    useEffect(() => {
        const data = fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    const onChange = (event) => {
        const [coin, price] = event.target.value.split(",");
        setPrice(price);
        setSelected(coin);
        // const selected = coins.find((element) => element.name === coin);
        // find 이용해서 찾을 수 있지만, 배열 검색을 한 번 더 해야하니 애초에 select 통해 값과 코인명 받음.
    }
    const onChangeInput = (event) => {
        setDollars(event.target.value);
    }
    const onClick = () => {
        setResult(
            `${dollars}$ = ${dollars / price} ${selected}`
        )
    }
    return <div>
        <h1>The Coins ! {loading ? null : `(${coins.length})`}</h1>
        {loading ? <strong>Loading...</strong> :
            <select onChange={onChange} value={selected}>
                <option>Choose Coin to calculate...</option>
                {
                    coins.map((coin) =>
                        <option key={coin.id} value={[coin.name, coin.quotes.USD.price]}>
                            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                        </option>
                    )}
            </select>}
        {selected
            ? <div>
                <h3>How much can you buy some {selected} ?</h3>
                <input type="number" value={dollars} onChange={onChangeInput} placeholder="Input $$$"></input>
                <button onClick={onClick}>Calculate!</button>
                <h3>{result}</h3>
            </div>
            : null}
    </div>

}

export default CoinTracker;