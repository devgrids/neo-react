import { useGetUser } from "@/actions/user";
import BaseLayout from "@/components/layouts/BaseLayout";
import React, { useEffect, useRef, useState } from "react";
import HeaderVertical from "@/components/HeaderVertical";
import ChatResponse from "@/components/ChatResponse";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import InformationFooter from "@/components/InformationFooter";

const Index = () => {
  const { data, loading } = useGetUser();
  const [isOpen, setIsOpen] = useState(false);

  console.log(data);

  return (
    <BaseLayout user={data} loading={loading}>
      <div className="PageChat">
        <div className="App">
          <div className="main">
            <div className="chats">
              <ChatResponse key={0} image={"./images/ia.png"} bot={true}>
                <HeaderVertical user={data} loading={loading}></HeaderVertical>
              </ChatResponse>
            </div>

            <div className="chatFooter">
              <InformationFooter></InformationFooter>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Index;
