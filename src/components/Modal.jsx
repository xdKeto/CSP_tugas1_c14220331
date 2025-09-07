const Modal = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="bg-white rounded-lg shadow-lg px-6 pb-8 pt-4 w-full max-w-xl mx-4">
        <div className="flex flex-row justify-between">
            <p className="font-semibold text-blue-950">Post {post.id}</p>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        <p className="text-lg">{post.body}</p>
      </div>
    </div>
  );
};

export default Modal;
