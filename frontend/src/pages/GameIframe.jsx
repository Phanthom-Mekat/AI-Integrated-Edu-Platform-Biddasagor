

const GameIframe = () => {
    return (
        <div className="flex justify-center">
            
            <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '1300px' }}>
      <iframe
        src={'https://www.arcademics.com/games/canoe-puppies'}
        title="IO Game"
        style={{
          width: '100%',
          height: '90%',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
        allowFullScreen
      />
    </div>
        </div>
    );
};

export default GameIframe;