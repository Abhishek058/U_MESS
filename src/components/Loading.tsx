const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
      <h1 className="text-2xl text-white p-8">Loading...</h1>
    </div>
  );
};

export default Loading;
