import PhotoCard from './PhotoCard';

function PhotoGallery({ photos, isLoading }) {
  if (isLoading) {
    return (
      <div className="text-center py-16">
        <p className="text-2xl text-white dark:text-gray-300">Carregando fotos...</p>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="inline-block bg-white/90 dark:bg-gray-800/90 text-indigo-600 dark:text-indigo-400 px-8 py-6 rounded-xl text-2xl font-semibold shadow-xl">
          Nenhuma foto encontrada
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default PhotoGallery;
