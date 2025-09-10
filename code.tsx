import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, Mail, Calendar, Users, Eye } from "lucide-react";

const HMOptometriWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-blue-800">HM Optometri</h1>
                <p className="text-xs text-gray-600">Universitas Widya Husada Semarang</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'activities', 'gallery', 'news', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`font-medium transition-colors ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['home', 'about', 'activities', 'gallery', 'news', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`font-medium text-left py-2 transition-colors ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Himpunan Mahasiswa Optometri
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6">
                Universitas Widya Husada Semarang
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Wadah pengembangan diri dan profesionalisme bagi mahasiswa optometri 
                dalam mengeksplorasi ilmu kesehatan mata dan visi.
              </p>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
              >
                Jelajahi Lebih Lanjut
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://placehold.co/600x400" 
                alt="Mahasiswa optometri Universitas Widya Husada Semarang sedang melakukan praktikum dengan peralatan kesehatan mata modern" 
                className="rounded-lg shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Tentang Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://placehold.co/600x400" 
                alt="Logo Himpunan Mahasiswa Optometri Universitas Widya Husada Semarang dengan desain modern dan profesional" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Visi & Misi</h3>
              <p className="text-gray-700 mb-6">
                Menjadi himpunan mahasiswa yang unggul dalam pengembangan ilmu optometri 
                dan kontribusi nyata bagi kesehatan mata masyarakat.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Pengembangan Akademik</h4>
                    <p className="text-gray-600">Meningkatkan kompetensi akademik melalui diskusi, seminar, dan workshop</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Pengabdian Masyarakat</h4>
                    <p className="text-gray-600">Melakukan pemeriksaan mata gratis dan edukasi kesehatan mata untuk masyarakat</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Jaringan Profesional</h4>
                    <p className="text-gray-600">Membangun jaringan dengan praktisi dan alumni optometri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Kegiatan & Acara</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Activity 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src="https://placehold.co/600x400" 
                alt="Seminar kesehatan mata dengan pembicara ahli dan peserta mahasiswa optometri yang antusias" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-blue-800 mb-2">Seminar Optometri</h3>
                <p className="text-gray-600 mb-4">
                  Diskusi ilmiah dengan pakar optometri tentang perkembangan terbaru dalam perawatan kesehatan mata.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>15 Oktober 2023</span>
                </div>
              </div>
            </div>
            
            {/* Activity 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src="https://placehold.co/600x400" 
                alt="Kegiatan bakti sosial pemeriksaan mata gratis untuk masyarakat di lingkungan kampus" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-blue-800 mb-2">Bakti Sosial</h3>
                <p className="text-gray-600 mb-4">
                  Pemeriksaan mata gratis dan penyuluhan kesehatan mata untuk masyarakat sekitar kampus.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>28 November 2023</span>
                </div>
              </div>
            </div>
            
            {/* Activity 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src="https://placehold.co/600x400" 
                alt="Workshop praktikum optometri dengan mahasiswa menggunakan peralatan pemeriksaan mata modern" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-blue-800 mb-2">Workshop Praktikum</h3>
                <p className="text-gray-600 mb-4">
                  Pelatihan penggunaan alat-alat optometri dan teknik pemeriksaan mata yang benar.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>10 Desember 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Galeri Kegiatan</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://placehold.co/600x400" 
                alt="Momen seru saat mahasiswa optometri melakukan praktikum bersama di laboratorium kampus" 
                className="w-full h-48 object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://placehold.co/600x400" 
                alt="Sesi foto bersama setelah acara seminar optometri dengan seluruh peserta dan panitia" 
                className="w-full h-48 object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://placehold.co/600x400" 
                alt="Kegiatan bakti sosial dengan masyarakat yang antusias melakukan pemeriksaan mata gratis" 
                className="w-full h-48 object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://placehold.co/600x400" 
                alt="Diskusi kelompok mahasiswa optometri dalam kegiatan studi kasus kesehatan mata" 
                className="w-full h-48 object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://placehold.co/600x400" 
                alt="Presentasi penelitian mahasiswa optometri di depan dosen dan kolega" 
                className="w-full h-48 object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://placehold.co/600x400" 
                alt="Kunjungan industri ke klinik mata untuk belajar praktik langsung di lapangan" 
                className="w-full h-48 object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://placehold.co/600x400" 
                alt="Pelatihan soft skill untuk persiapan karir sebagai optometrist profesional" 
                className="w-full h-48 object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://placehold.co/600x400" 
                alt="Kegiatan team building untuk mempererat hubungan antar anggota himpunan mahasiswa optometri" 
                className="w-full h-48 object-cover transition-transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Berita Terkini</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* News 1 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-xl text-blue-800 mb-2">Kerjasama dengan Klinik Mata Terkemuka</h3>
              <div className="flex items-center text-sm text-blue-600 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>12 Desember 2023</span>
              </div>
              <p className="text-gray-600 mb-4">
                HM Optometri UWHS menjalin kerjasama dengan Klinik Mata Sejahtera untuk program magang 
                dan penelitian bersama. Kerjasama ini akan membuka peluang bagi mahasiswa untuk...
              </p>
              <button className="text-blue-600 font-medium hover:underline">Baca selengkapnya</button>
            </div>
            
            {/* News 2 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-xl text-blue-800 mb-2">Pengukuhan Pengurus Baru HM Optometri</h3>
              <div className="flex items-center text-sm text-blue-600 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>5 Desember 2023</span>
              </div>
              <p className="text-gray-600 mb-4">
                Telah dilaksanakan serah terima jabatan pengurus HM Optometri periode 2023-2024. 
                Acara berlangsung khidmat dengan harapan dapat melanjutkan program-program sebelumnya...
              </p>
              <button className="text-blue-600 font-medium hover:underline">Baca selengkapnya</button>
            </div>
            
            {/* News 3 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-xl text-blue-800 mb-2">Penelitian Mahasiswa Optometri Raih Hibah</h3>
              <div className="flex items-center text-sm text-blue-600 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>28 November 2023</span>
              </div>
              <p className="text-gray-600 mb-4">
                Tim penelitian mahasiswa optometri berhasil meraih hibah penelitian dari Kementerian 
                Pendidikan untuk mengembangkan alat deteksi dini gangguan penglihatan pada anak...
              </p>
              <button className="text-blue-600 font-medium hover:underline">Baca selengkapnya</button>
            </div>
            
            {/* News 4 */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-xl text-blue-800 mb-2">Webinar Nasional Kesehatan Mata</h3>
              <div className="flex items-center text-sm text-blue-600 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>15 November 2023</span>
              </div>
              <p className="text-gray-600 mb-4">
                HM Optometri UWHS sukses menyelenggarakan webinar nasional dengan tema "Inovasi 
                dalam Perawatan Kesehatan Mata di Era Digital". Webinar dihadiri oleh 500+ peserta...
              </p>
              <button className="text-blue-600 font-medium hover:underline">Baca selengkapnya</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Hubungi Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Email</h4>
                    <p className="text-gray-600">hmoptometri@uwh.ac.id</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Instagram className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Instagram</h4>
                    <p className="text-gray-600">@hmoptometri_uwhs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Facebook</h4>
                    <p className="text-gray-600">Himpunan Mahasiswa Optometri UWHS</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Alamat</h4>
                    <p className="text-gray-600">
                      Jurusan Optometri, Universitas Widya Husada Semarang<br />
                      Jl. Soekarno Hatta No. 123, Semarang, Jawa Tengah
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Masukkan alamat email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tulis pesan Anda di sini"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold mr-3">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">HM Optometri</h3>
                  <p className="text-sm text-blue-200">Universitas Widya Husada Semarang</p>
                </div>
              </div>
              <p className="text-blue-200 mb-6">
                Wadah pengembangan diri dan profesionalisme bagi mahasiswa optometri 
                dalam mengeksplorasi ilmu kesehatan mata dan visi.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Tautan Cepat</h4>
              <ul className="space-y-3">
                {['home', 'about', 'activities', 'gallery', 'news', 'contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item)}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Kontak</h4>
              <address className="not-italic text-blue-200">
                <p className="mb-3">Jurusan Optometri</p>
                <p className="mb-3">Universitas Widya Husada Semarang</p>
                <p className="mb-3">Jl. Soekarno Hatta No. 123</p>
                <p className="mb-3">Semarang, Jawa Tengah</p>
                <p className="mb-3">hmoptometri@uwh.ac.id</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
            <p>&copy; {new Date().getFullYear()} Himpunan Mahasiswa Optometri Universitas Widya Husada Semarang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HMOptometriWebsite;