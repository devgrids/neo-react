import Query from "@/components/Query";

const HeaderVertical = () => {
  return (
    <>
      <Query image="../images/message.svg" href="/chat">
        Transformer
      </Query>
      <Query image="../images/message.svg" href="/chat/vision">
        Vision Transformer
      </Query>
    </>
  );
};

export default HeaderVertical;
