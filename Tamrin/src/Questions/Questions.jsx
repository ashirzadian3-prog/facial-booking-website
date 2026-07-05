import './Questions.css'
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { GoHorizontalRule } from "react-icons/go";
import { VscRemove } from "react-icons/vsc";


function Questions() {

    const [clicked, setClicked] = useState(null);

    const questions = [
        {
            question: "فیشال چند جلسه نیاز داره؟",
            answer: "برای نتیجه بهتر..."
        },
        {
            question: "آیا فیشال درد داره؟",
            answer: "خیر..."
        },
        {
            question: "قبل از فیشال چیکار کنم؟",
            answer: "یه روز قبل از لایه‌بردار استفاده نکنید. بدون آرایش بیاید و صورتتون رو نشسته نگه دارید."
        },
        {
            question: "آیا برای پوست جوش‌دار مناسبه؟",
            answer: "بله! فیشال تخصصی آکنه یکی از بهترین درمان‌هاست. جلسه اول مشاوره رایگان داریم."
        }
    ];


    return (
        <div className="Questionscontainer" id='questions'>
            <h2>سوالات متداول</h2>

            {questions.map((item, index) => (
                <div key={index} className='Questions'>
                    <button className='butQuestion' onClick={() => {
                        setClicked(clicked === index ? null : index)
                    }}>
                        {item.question}
                        <span><FiPlus /></span>

                    </button>

                    {clicked === index && (
                        <div className='answer'>
                            <button className='naswerbut'>
                                {item.answer}
                                <span><VscRemove /></span>
                            </button>

                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Questions;