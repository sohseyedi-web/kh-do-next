const Loading = ({ status = false }: { status?: boolean }) => {
  return status ? (
    <div className="flex items-center justify-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  ) : (
    <span className="loading loading-dots loading-lg"></span>
  );
};

export default Loading;
