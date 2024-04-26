const Avatar = ({ image, author, children }) => {
  return (
    <div className="media avatar-box mb-0 d-flex align-items-center">
      <img className="mr-3" src={image} />
      <div className="media-body">
        <h5 className="mt-0 mb-0 ms-2 subtitle">{`${author}`}</h5>
      </div>
      <div className="mt-0 mb-0 ms-2 subtitle">{children}</div>
    </div>
  );
};

export default Avatar;
