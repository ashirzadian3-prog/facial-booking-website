import './Homefirst.css'

function Homefirst() {
    return (
        <div className="Homefirstcontainer">
            <div className="homefirstbut">
                <button>🏅 بهترین مرکز فیشال تخصصی</button>
            </div>
            <div className='homefirstyedxy'>
                <h1>پوست سالم، زیبایی واقعی</h1>

                <p>با بیش از ۵ سال تجربه در فیشال تخصصی، مراقبت پوست رو به دستان
                    متخصص بسپار. اولین مشاوره کاملاً رایگان است! 🌺</p>
            </div>
            <div className='hfbutns'>
                <a href="#reserve">
                    📅 رزرو نوبت آنلاین
                </a>
                <a className='hfbutnssecond' href="tel:02188888888">
                    📞 ۰۲۱-۸۸۸۸۸۸۸۸
                </a>
            </div>
        </div>
    )
}

export default Homefirst;