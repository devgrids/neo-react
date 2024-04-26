import ActiveLink from "@/components/shared/ActiveLink";

const Query = ({ image, href, children }) => {
  return (
    <ActiveLink activeClassName="active" href={href}>
      <button className="query">
        <img src={image} alt="Query" />
        {children}
      </button>
    </ActiveLink>
  );
};

export default Query;
