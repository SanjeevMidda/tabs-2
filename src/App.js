import "./index.css";
import Country from "./components/Country";

function App() {
  return (
    <div className="App">
      <header>
        {/* <h2>geography</h2> */}
        <div className="circle-logo"></div>
      </header>

      <div className="content-container">
        <Country
          borderColor="blue"
          text="london"
          contentText="London, the capital of the United Kingdom, is a vibrant and diverse metropolis known for its rich history, iconic landmarks such as the Tower of London and Buckingham Palace, and a thriving cultural scene. The River Thames flows through the heart of the city, connecting its various boroughs. London is a global financial hub and a melting pot of cultures, offering a blend of historical charm and modern dynamism."
        />
        <Country
          borderColor="orangeRed"
          text="seoul"
          contentText="Seoul, the capital of South Korea, is a bustling metropolis seamlessly blending modernity with traditional Korean culture. The cityscape is adorned with skyscrapers, including the futuristic Dongdaemun Design Plaza, while historic sites like Gyeongbokgung Palace reflect the nation’s rich heritage. Renowned for its vibrant street food, K-pop music scene, and innovative technology, Seoul stands as a dynamic hub at the intersection of tradition and progress."
        />
        <Country
          borderColor="green"
          text="new york"
          contentText="New York City, a global metropolis on the northeastern coast of the United States, is famed for its iconic skyline dominated by landmarks like the Statue of Liberty and Times Square. The city’s five boroughs—Manhattan, Brooklyn, Queens, the Bronx, and Staten Island—offer a diverse tapestry of cultures, cuisines, and neighborhoods. With a pulsating energy, Broadway theaters, and Central Park’s green oasis, New York remains a cultural and economic powerhouse."
        />
        <Country
          borderColor="brown"
          text="shanghai"
          contentText="Shanghai, China’s largest city, is a futuristic metropolis showcasing a blend of modern architecture and historic charm along the Huangpu River. The city’s iconic skyline, featuring the Oriental Pearl Tower and Jin Mao Tower, reflects its rapid economic development. Renowned for its vibrant street life, global financial district, and the historic district of The Bund, Shanghai stands as a testament to China’s dynamic blend of tradition and progress."
        />
        <Country
          borderColor="yellow"
          text="paris"
          contentText="Paris, the capital of France, is renowned for its romantic ambiance, iconic landmarks like the Eiffel Tower, and world-class art and fashion scenes. The River Seine gracefully winds through the city, adding to its charm and providing scenic views of landmarks such as Notre-Dame Cathedral. With its elegant boulevards, historic museums like the Louvre, and sidewalk cafés, Paris remains a cultural and artistic hub."
        />
      </div>
    </div>
  );
}

export default App;
