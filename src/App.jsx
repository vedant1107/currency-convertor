import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

    const [amount, setAmount] = useState(0)
    const [fromCurr, setFromCurr] = useState("usd")
    const [toCurr, setToCurr] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(fromCurr)

    const options = Object.keys(currencyInfo)
    // console.log(options)

    const swap = () => {
        // how are they swaping?
        setFromCurr(toCurr)
        setToCurr(fromCurr)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[toCurr])
    }

    const reset = () => {
        setAmount(0)
        setConvertedAmount(0)
        setFromCurr("usd")
        setToCurr("inr")
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()      // calling the convert function to convert currencies

                        }}
                    >
                        <div className="w-full mb-1">
                            {/* InputBox Component */}
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFromCurr(currency)}
                                selectCurrency={fromCurr}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}           // calling swap currency function
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            {/* InputBox Component */}
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setToCurr(currency)}
                                selectCurrency={toCurr}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {fromCurr.toUpperCase()} to {toCurr.toUpperCase()}
                        </button>
                        <button onClick={reset} className="w-full bg-blue-600 text-white px-4 py-3 my-2 rounded-lg">
                            Reset
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
