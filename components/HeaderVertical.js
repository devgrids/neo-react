import Query from "@/components/Query";
import { isAuthorized } from "@/utils/auth0";

const HeaderVertical = ({ user, loading }) => {
  return (
    <>
      {!loading && (
        <>
          {user && (
            <>
              <Query image="../images/message.svg" href="/language_processing">
                Procesamiento de lenguaje
              </Query>
              <Query image="../images/message.svg" href="/image_processing">
                Procesamiento de imágenes
              </Query>
            </>
          )}

          {!user && <></>}
          {isAuthorized(user, "admin") && (
            <>
              <Query image="../images/message.svg" href="/image_processing">
                Traducción
              </Query>
            </>
          )}
        </>
      )}
    </>
  );
};

export default HeaderVertical;
