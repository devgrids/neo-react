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

  var message = `
### Programa de Inteligencia Artificial Multimodal

Este programa de inteligencia artificial multimodal utiliza una variedad de modelos avanzados para ofrecer una amplia gama de funciones y aplicaciones. Desde procesamiento del lenguaje natural hasta generación de imágenes y más, este programa integra tecnologías líderes en inteligencia artificial para brindar una experiencia completa y versátil.

#### Funciones principales:

1. **Procesamiento del Lenguaje Natural (NLP):**
   - Análisis de sentimientos.
   - Generación de texto.
   - Traducción de idiomas.
   - Resumen de texto.
   - Clasificación de texto.

2. **Visión por Computadora:**
   - Detección de objetos.
   - Reconocimiento de imágenes.
   - Generación de imágenes.
   - Segmentación de imágenes.
   - Estilo de transferencia.

3. **Generación de Texto e Imágenes:**
   - Texto a imagen.
   - Imagen a texto.
   - Generación de texto creativo.
   - Edición de imágenes.
   - Composición de imágenes.

4. **Modelado de Conversación:**
   - Chatbots inteligentes.
   - Asistentes virtuales.
   - Sistemas de recomendación personalizados.
   - Interacción multimodal (texto y voz).

5. **Aplicaciones Específicas:**
   - Resolución de problemas de dominio específico.
   - Automatización de tareas.
   - Análisis de datos.
   - Predicción y pronóstico.

#### Tecnologías Utilizadas:

- **OpenAI:** Utilizado para una variedad de tareas de procesamiento del lenguaje natural, generación de texto e imágenes.
- **Gemini:** Aplicado en la generación de imágenes, estilo de transferencia y reconocimiento de imágenes.
- **Otros modelos de vanguardia:** Integración de una variedad de modelos preentrenados y personalizados para abordar diferentes problemas y tareas de manera efectiva.

Este programa de inteligencia artificial multimodal ofrece un conjunto completo de herramientas para satisfacer las necesidades de una amplia gama de aplicaciones y usuarios. Desde la generación de texto hasta la creación de imágenes, pasando por la interacción conversacional, este programa ofrece soluciones avanzadas para desafíos complejos en el campo de la inteligencia artificial.
`;

  console.log(data);

  return (
    <BaseLayout user={data} loading={loading}>
      <div className="PageChat">
        <div className="App">
          <div className="sideBar">
            <div className="upperSide">
              <div className="upperSideBottom">
                <HeaderVertical user={data} loading={loading}></HeaderVertical>
              </div>
            </div>
            <div className="lowerSide">
              <div className="listItems">Modelo</div>
            </div>
          </div>
          <div className="main">
            <div className="chats">
              <ChatResponse key={0} image={"./images/ia.png"} bot={true}>
                {/* <MarkdownRenderer markdownText={message} /> */}
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
