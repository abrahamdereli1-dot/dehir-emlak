import { ArrowUpRight, Building2, Check, ChevronRight, MapPin, Menu, Phone, ShieldCheck, Sprout, Store, Trees, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { featuredListings } from './content/listings'

const phone = '05467431620'
const whatsappUrl = `https://wa.me/90${phone.slice(1)}?text=${encodeURIComponent('Merhaba Dehir Emlak, gayrimenkul yatırımı hakkında bilgi almak istiyorum.')}`
const valuationUrl = `https://wa.me/90${phone.slice(1)}?text=${encodeURIComponent('Merhaba Dehir Emlak, mülküm için değerlendirme talep ediyorum.')}`

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#anasayfa" onClick={closeMenu} aria-label="Dehir Emlak ana sayfa">
          <span className="brand-mark">D</span><span>DEHİR <em>EMLAK</em></span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Ana menü">
          <a href="#portfoy" onClick={closeMenu}>Portföy</a><a href="#hizmetler" onClick={closeMenu}>Hizmetler</a><a href="#hakkimizda" onClick={closeMenu}>Hakkımızda</a><a href="#iletisim" onClick={closeMenu}>İletişim</a>
          <a className="nav-call" href={`tel:${phone}`}><Phone size={15} /> 0546 743 16 20</a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menüyü aç/kapat" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="anasayfa">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow"><span /> KIRKAĞAÇ • MANİSA</span>
            <h1>Değerli yatırımlar için <i>doğru adres.</i></h1>
            <p>Kırkağaç ve çevresinde, bölgeyi gerçekten tanıyan uzmanlıkla gayrimenkul yatırımlarınıza eşlik ediyoruz.</p>
            <div className="hero-actions"><a className="button button-gold" href="#portfoy">Portföyü keşfedin <ArrowUpRight size={18} /></a><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp’tan yazın <ChevronRight size={17} /></a></div>
            <div className="hero-proof"><div><strong>2024</strong><span>Kuruluş</span></div><div><strong>4501297</strong><span>Yetki Belgesi</span></div><div><strong>EİDS</strong><span>Doğrulamalı İlan</span></div></div>
          </div>
          <div className="hero-visual"><div className="hero-image" /><div className="hero-stamp"><span>DEHİR</span><b>Güvenilir<br />Hizmet</b><i>↗</i></div><div className="hero-label"><MapPin size={17} /><span>Yeni Mahalle<br /><b>Kırkağaç</b></span></div></div>
        </section>

        <section className="trust-strip" aria-label="Güven bilgileri"><div><ShieldCheck /><span><b>Yetkili gayrimenkul danışmanlığı</b><small>Yetki belge no: 4501297</small></span></div><div><Check /><span><b>Şeffaf süreç, net iletişim</b><small>Alım, satım ve yatırım danışmanlığı</small></span></div><div><MapPin /><span><b>Bölge bilgisiyle güçlü analiz</b><small>Kırkağaç ve çevre ilçeler</small></span></div></section>

        <section className="section listings" id="portfoy"><div className="section-heading"><div><span className="eyebrow dark"><span /> SEÇİLİ FIRSATLAR</span><h2>Öne çıkan <i>portföy.</i></h2></div><a className="outline-button" href="https://dehir-emlak-kirkagac.satariz.com" target="_blank" rel="noreferrer">Tüm ilanları görün <ArrowUpRight size={17} /></a></div><div className="listing-grid">{featuredListings.map((listing) => <a className="listing-card" href={listing.detailUrl} target="_blank" rel="noreferrer" key={listing.detailUrl}><div className="listing-image"><img src={listing.image} alt={listing.title} loading="lazy" /><span>{listing.category}</span></div><div className="listing-body"><p>{listing.location}</p><h3>{listing.title}</h3><div><strong>{listing.price}</strong><ArrowUpRight size={18} /></div></div></a>)}</div></section>

        <section className="section services" id="hizmetler"><div className="services-intro"><span className="eyebrow"><span /> NASIL YARDIMCI OLUYORUZ?</span><h2>Yatırım kararınıza <i>değer katıyoruz.</i></h2><p>İlk görüşmeden tapu sürecine kadar, doğru bilgiyle ve sizin önceliklerinizle hareket ederiz.</p><a href={valuationUrl} target="_blank" rel="noreferrer" className="button button-light">Mülkünüzü değerlendirelim <ArrowUpRight size={18} /></a></div><div className="service-list"><article><Sprout /><div><h3>Tarla & Arsa</h3><p>Yatırım potansiyelini yerinde inceleyip doğru fırsatları birlikte değerlendiririz.</p></div><span>01</span></article><article><Trees /><div><h3>Zeytinlik & Bahçe</h3><p>Bölgenin üretim ve arazi dinamiklerine hâkim, bilinçli danışmanlık.</p></div><span>02</span></article><article><Building2 /><div><h3>Konut</h3><p>Yaşam ihtiyaçlarınıza ve yatırım hedefinize uygun gayrimenkul seçimi.</p></div><span>03</span></article><article><Store /><div><h3>İş Yeri</h3><p>Ticari değeri yüksek lokasyon ve gayrimenkul fırsatları için destek.</p></div><span>04</span></article></div></section>

        <section className="about" id="hakkimizda"><div className="about-panel"><span className="eyebrow dark"><span /> DEHİR EMLAK</span><h2>Yerel bilgi.<br /><i>Kalıcı değer.</i></h2><p>2024’te Kırkağaç’ta kurulan Dehir Emlak; tarla, arsa, zeytinlik, ev ve iş yeri yatırımlarında güvenilir çözüm ortağınız olmak için çalışır.</p><p>Soma, Akhisar, Savaştepe ve çevre ilçelerdeki portföyümüzle; şeffaf, erişilebilir ve profesyonel danışmanlığı bir arada sunuyoruz.</p><div className="advisor"><div>GH</div><span><b>Gonca H.</b><small>Ofis Sahibi / Broker</small></span></div></div><div className="about-image"><div className="about-quote">“Doğru yatırım, güvenilir hizmet.”</div></div></section>

        <section className="contact" id="iletisim"><div><span className="eyebrow"><span /> İLETİŞİM</span><h2>Bir kahve eşliğinde<br /><i>konuşalım.</i></h2><p>Yatırım planınız veya mülkünüz hakkında konuşmak için bize doğrudan ulaşın.</p><a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp’tan ulaşın <ArrowUpRight size={18} /></a></div><div className="contact-details"><a href={`tel:${phone}`}><Phone /><span><small>TELEFON</small><b>0546 743 16 20</b></span></a><a href="https://maps.google.com/?q=Yeni+Mahalle+40+Sokak+No+32%2F2+K%C4%B1rka%C4%9Fa%C3%A7+Manisa" target="_blank" rel="noreferrer"><MapPin /><span><small>OFİS</small><b>Yeni Mahalle 40 Sokak No:32/2<br />Kırkağaç / Manisa</b></span></a></div></section>
      </main>
      <footer><a className="brand" href="#anasayfa"><span className="brand-mark">D</span><span>DEHİR <em>EMLAK</em></span></a><span>© {new Date().getFullYear()} Kırkağaç Dehir Emlak</span><a href="#anasayfa">Yukarı çık ↑</a></footer>
      <div className="mobile-actions"><a href={`tel:${phone}`}><Phone size={18} /> Ara</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp’tan yazın <ArrowUpRight size={17} /></a></div>
    </>
  )
}

export default App
