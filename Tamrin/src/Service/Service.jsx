import './Service.css'

// TODO: replace these placeholder entries with the real services and prices.
const services = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    emoji: '✨',
    title: 'پاکسازی و فیشال کلاسیک',
    description: ['لایه‌برداری مکانیکی و بازسازی بافت پوست', 'و ماساژ صورت'],
    price: 'از ۵۵۰,۰۰۰ تومان',
}))

function Service() {
    const goToReserve = () => {
        document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="Servicecontainer">
            <div className="Servicetext" id='service'>
                <h2>خدمات تخصصی ما</h2>
                <p>هر درمان با مشاوره رایگان و مطابق با نوع پوست شما طراحی میشه</p>
            </div>
            <div className='Serviceboxcontainer'>
                {services.map((service) => (
                    <div className='Servicebox' key={service.id}>
                        <div className='emoji'>{service.emoji}</div>
                        <h2>{service.title}</h2>
                        <div className='Serviceboxp'>
                            {service.description.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                        <div className='Serviceboxdetail'>
                            <p>{service.price}</p>
                            <button className='servicebut' onClick={goToReserve}>رزرو</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service;
