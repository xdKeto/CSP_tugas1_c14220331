import { useState, useEffect } from "react";
import Loading from "./Loading.jsx";
import Modal from "./Modal.jsx";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mx-auto p-4 justify-items-center">
        <h1 className="text-3xl font-bold">BLOG POST</h1>
        <p className="font-semibold text-sm text-blue-950 mb-4">Yestoya L Minggus - c14220331</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="p-6 border-blue-950 border-2 rounded-lg flex flex-col justify-between">
              <div>
                <h1 className="font-semibold text-xl mb-4"> {post.title} </h1>
              </div>
              <button
                onClick={() => openModal(post)}
                className="bg-blue-950 text-white px-4 py-2 rounded-md mt-auto"
              >
                See Detail
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedPost && <Modal post={selectedPost} onClose={closeModal} />}
    </>
  );
};

export default Posts;

