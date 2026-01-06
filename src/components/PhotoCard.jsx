function PhotoCard({ photo }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer">
      <div className="w-full h-64 overflow-hidden">
        <img
          src={photo.url}
          alt={photo.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>
      <p className="p-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-100">
        {photo.name}
      </p>
    </div>
  );
}

export default PhotoCard;
