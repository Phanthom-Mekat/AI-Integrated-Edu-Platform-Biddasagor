const AdaptiveGame = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4">
            <div className="w-full max-w-[1200px] aspect-[16/9]">
                <iframe
                    src={'https://www.mindlygames.com/game/two-digit-addition-and%20adding-10-more-dino-eggs'}
                    title="Adaptive Game"
                    className="w-full h-full rounded-lg shadow-lg"
                    style={{
                        minHeight: '300px',  
                        maxHeight: '100vh'     
                    }}
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default AdaptiveGame;