import Query from "@/components/Query";
import { isAuthorized } from "@/utils/auth0";

const HeaderVertical = ({ user, loading }) => {
  return (
    <>
      {!loading && (
        <>
          {!user && (
            <>
              "¡Hola! Bienvenido. Para usar el chat, por favor inicia sesión."
            </>
          )}
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

          {isAuthorized(user, "admin") && (
            <>
              {/* <Query image="../images/message.svg" href="/image_processing">
                Transcripción de video - YouTube
              </Query> */}
            </>
          )}
        </>
      )}
    </>
  );
};

export default HeaderVertical;
