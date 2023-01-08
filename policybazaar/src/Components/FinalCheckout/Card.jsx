const Card=()=>
{
    return(
        <div>
            <h5>Select Bank</h5>
            <select>
                <option>Select Bank</option>
                <option>ICICI Bank</option>
                <option value="">HDFC Bank</option>
                <option value="">Canara Bank</option>
                <option value="">SBI</option>
                <option value="">Punjab National Bank</option>
                <option value="">Bank of India</option>
            </select>
            <h5>Card Number</h5>
            <input type="number" placeholder="xxxx-xxxx-xxxx-xxxx"/>
            <h5>Name on Card</h5>
            <input type="text" placeholder="Enter name on the card"/>
            <h5>Expiry Date</h5>
            <input type="date"/>
            <h5>CVV</h5>
            <input type="number" style={{width:"20%"}}/>
            <h5>Note:</h5>
            <div id="fcnotes">
            <p>a. VISA Network - Only Axis Bank, Bank of Baroda, Bank of India, Canara Bank, CUB, Equitas, Federal Bank, HDFC Bank, ICICI Bank, IDBI Bank, Indian Bank, Indian Overseas Bank, IndusInd Bank, Jupiter, Kotak Bank, KVB, RBL Bank, SBI, SBM, Standard Chartered Bank, and Union Bank of India.</p>
            <p>b. MasterCard Network - Only Axis Bank, Bank of Baroda, Bank of India, Canara Bank, CITI Bank, CUB, Equitas, Federal Bank, HDFC Bank, ICICI Bank, IDBI Bank, Indian Bank, Indian Overseas Bank, IndusInd Bank, KVB, RBL Bank, SBI, SBM, and Union Bank of India.</p>
            </div>
        </div>
    )
}
export default Card