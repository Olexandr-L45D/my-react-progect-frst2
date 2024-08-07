// first files
const alertStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    backgroundColor: "red",
    color: "white",
};

export default function Product(props) {
    console.log(props);
    const isOnline = true;
    const isOnlineStasus = true
    const lincImag = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=200&w=200"
    return (
        <div>
            <h1>Test-Card</h1>
            <div>marking for training </div>
            <h2>React is web  an application</h2>

            {10 > 5 && <p>Logical No</p>}
            <img src={lincImag} alt="images" />
            <p style={alertStyles} >glad to welcome you to react {5 * 5}</p>
            <p style={alertStyles} >glad to welcome you to react {5 * 10}</p>
            <p style={alertStyles} ></p>
            <button>Button on Click</button>

            {isOnline && <div>isOnline-status</div>}
            {isOnlineStasus ? <div> is online</div> : <div>is ofline</div>}
            <label htmlFor="login" > <input id="login" /> </label>
        </div>

    );
};
