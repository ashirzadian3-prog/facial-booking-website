import { useState } from 'react'
import './Reserve.css'
import emailjs from '@emailjs/browser';

function Reserve() {

    const [form, setform] = useState({ name: "", phone: "", text: "" })
    const [done, setDone] = useState(false);

    const change = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        if (!form.name || !form.phone) {
            alert("لطفاً نام و شماره موبایل را وارد کنید.");
            return;
        }
        emailjs.send(
            "service_39u99jc",
            "template_4lkyuie",
            {
                from_name: form.name,
                phone: form.phone,
                message: form.text,
            },
            "uYheT3XcSNr3O91MC"

        ).then(() => {
            setDone(true);
        }).catch(() => {
            alert("خطا! دوباره امتحان کن");
        });
    }

    return (
        <section className='Reservesection' id='reserve'>
            <div className='Reservecontainer'>
                {done ? (
                    <div>درخواست شما ثبت شد 🌸</div>
                ) : (
                    <>
                        <h2>رزرو نوبت آنلاین</h2>
                        <p>فرم رو پر کنید، ما باهاتون تماس می‌گیریم 📞</p>
                        <div className='formcontainer'>
                            <div className='form'>
                                <label>نام و نام خانوادگی</label>
                                <input type="text" name='name' onChange={change} value={form.name} />
                            </div>
                            <div className='form'>
                                <label>شماره موبایل</label>
                                <input type="text" placeholder='...09' onChange={change} name='phone' value={form.phone} />
                            </div>
                            <div className='form'>
                                <label>توضیحات (اختیاری)</label>
                                <textarea name="text" onChange={change} value={form.text} rows={3} placeholder="مشکل پوستی یا سوال دارید؟ بنویسید..."></textarea>
                            </div>
                            <button className="formbut" onClick={handleSubmit}>
                                ارسال درخواست 🌸
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Reserve