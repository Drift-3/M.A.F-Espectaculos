const ReelsSection = () => (
  <section className="bg-black text-white py-12 px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Reels</h2>
    <div className="flex flex-wrap justify-center gap-6">
      <video src="/videos/reel1.mp4" controls className="w-72 rounded-md" />
      <video src="/videos/reel2.mp4" controls className="w-72 rounded-md" />
      <video src="/videos/reel3.mp4" controls className="w-72 rounded-md" />
    </div>
  </section>
);

export default ReelsSection;
