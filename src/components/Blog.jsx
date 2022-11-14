import React, {useEffect} from 'react'
import Github from '../assets/img/github.png'
import UiUx from '../assets/img/uiux.png'
import Developer from '../assets/img/developer.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Blog() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, []);
    return(
        <div className='blog p-5' id='blog'>
            <div className='blogText'>
                <h3>Blog Article <span>Collection</span></h3> <br /> <hr />
            </div> 
            <div className='container text-center mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="flip-right">
                        <div className="card text-dark">
                            <img src={Github} className="card-img-top" alt="UIUX" />
                            <div className="card-body">
                                <h5 className="card-title">Apa itu GitHub? Berikut Cara Menggunakannya</h5>
                                <p className="card-text">GitHub adalah platform khusus developer yang dibuat karena terinspirasi dari cara bekerja para programmer.</p>
                                <a href="https://www.dicoding.com/blog/apa-itu-github/" className="btn">Readmore...</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="zoom-in">
                        <div className="card text-dark">
                            <img src={UiUx} className="card-img-top" alt="Web Dev" />
                            <div className="card-body">
                                <h5 className="card-title">6 Tools UI/UX Design yang Sering Dipakai Designer</h5>
                                <p className="card-text">Terdapat banyak sekali tools UI/UX design yang sering dipakai oleh seorang UI/UX designer dalam membuat sebuah desain aplikasi.</p>
                                <a href="https://www.dicoding.com/blog/6-tools-ui-ux-design-yang-sering-dipakai-designer/" className="btn">Readmore...</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="flip-left">
                        <div className="card text-dark">
                            <img src={Developer} className="card-img-top" alt="CV" />
                            <div className="card-body">
                                <h5 className="card-title">Jadi Developer Harus Berani Keluar Zona Nyaman</h5>
                                <p className="card-text">Saat karir sudah bertahun lamanya dan sampai di titik mapan, kita kerap menyebutnya “zona nyaman.”</p>
                                <a href="https://www.dicoding.com/blog/jadi-developer-harus-berani-keluar-zona-nyaman-cerita-developer-lulusan-program-beasiswa-aws/" className="btn">Readmore...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;