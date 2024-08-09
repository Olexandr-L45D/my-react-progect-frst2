// first БАЗОВИЙ files


export default function Product(props) {
    console.log(props);

    const isOnline = true;
    const isOnlineStasus = true
    const lincImag = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=200&w=200"
    return (
        <div>
            <h1>Test-Card</h1>

            <div>Marking for training </div>
            <h2>React is web  an application</h2>

            {10 > 5 && <p>Logical No</p>}
            <img src={lincImag} alt="images" />
            <p>hello</p>
            <button>Button on Click</button>

            {isOnline && <div>isOnline-status</div>}
            {isOnlineStasus ? <div> is online</div> : <div>is ofline</div>}
            <label htmlFor="login" > <input id="login" /> </label>
        </div>

    );
};
