import './Navbar.css'

function Navbar() {
    return (
        <div className='containernav'>
            <div className='navrigth'>
                <div>پری بهلول 🌸</div>
                <p>متخصص فیشال و مراقبت پوست</p>
            </div>
            <div className='navleft'>
                <ul>
                    <li><a href="#service">خدمات</a></li>
                    <li><a href="#about">درباره ما</a></li>
                    <li><a href="#questions">سوالات</a></li>
                </ul>
                <button className='navbut'><li><a href="#reserve">📅 رزرو نوبت</a></li></button>
            </div>
        </div>
    )
}

export default Navbar;