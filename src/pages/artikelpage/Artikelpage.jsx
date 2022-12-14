import React from 'react'
import './Artikelpage.css'
import Footer from '../../component/footer/Footer';
import berita1 from './img/berita1.png'
import penulis1 from './img/penulis1.png'
import berita2 from './img/berita2.png'
import berita3 from './img/berita3.png'
import Navbar from '../../component/Navbar/Navbar';

const Artikelpage = () => {
  return (
    <div>
      <Navbar />
      <div className='head'>
        <div className='container'>
          <div className='boxtext'>
          <svg xmlns="http://www.w3.org/2000/svg"  width="100px" height="100px" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>
          <h1>Artikel</h1>
          <p>Semua acara terbaru, siaran pers, dan blog. Blog Freedom bertujuan untuk merangsang perdebatan tentang anti-rasisme, kesetaraan ras, dan isu-isu utama yang berdampak pada etnis dan agama minoritas dan migran. Ini adalah ruang terbuka untuk debat, diskusi, dan gagasan yang saling menghormati tentang masalah ras dan rasisme di Indonesia dan sekitarnya.</p>
          </div>
            
        </div>    
        </div>
        <div className='isi'>
            <div className='berita'>
            <img src={berita1}/>
            <h4 style={{border:"1px"}}>Kompasiana, 2022</h4>
            <h2>Rasisme Agama dalam Psikologi Manusia</h2>
            <div className='penulis'>
            <img src={penulis1}/>
            <div><h4>H.Asrul Hoesein</h4>
            <p>6 November 2022</p></div>
            
            </div>
            </div>
            <div className='beritascroll'>
            <div className='cardberita'>
                    <img src={berita3} />
                    <h4>Finalis Putri Indonesia, Olvah Alhamid Hadapi Rasisme </h4>
                    <p>08 November 2022</p>
                    <button className='btn btn-danger'>Selengkapnya</button>
                    </div>
                <div className='cardberita'>
                    <img src={berita2} />
                    <h4>Rektor ITK  Dinilai Rasis Ketika Wawancarai Mahasiswa </h4>
                    <p>08 November 2022</p>
                    <button className='btn btn-danger'>Selengkapnya</button>
                    </div>
                    
                    <div className='cardberita'>
                    <img src={berita2} />
                    <h4>Rektor ITK  Dinilai Rasis Ketika Wawancarai Mahasiswa </h4>
                    <p>08 November 2022</p>
                    <button className='btn btn-danger'>Selengkapnya</button>
                    </div>
                    <div className='cardberita'>
                    <img src={berita2} />
                    <h4>Rektor ITK  Dinilai Rasis Ketika Wawancarai Mahasiswa </h4>
                    <p>08 November 2022</p>
                    <button className='btn btn-danger'>Selengkapnya</button>
                    </div>
                    
                    </div>
        </div>
        <Footer />    
    </div>
  )
}

export default Artikelpage;
