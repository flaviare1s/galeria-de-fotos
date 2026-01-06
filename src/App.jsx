import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import photosData from './data/photos.json';

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem('searchTerm') || '';
  });

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    setTimeout(() => {
      setPhotos(photosData);
      setIsLoading(false);
    }, 500);
  }, []);

  const filteredPhotos = useMemo(() => {
    if (searchTerm.trim() === '') {
      return photos;
    }
    return photos.filter(photo =>
      photo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, photos]);

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-purple-100 to-purple-200 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <PhotoGallery photos={filteredPhotos} isLoading={isLoading} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
