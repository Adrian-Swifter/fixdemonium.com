"use client";
import { useState, useEffect, useRef } from "react";

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const [playingWith, setPlayingWith] = useState(""); // 'matt' or 'wp-engine'
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]); // Snake's initial position
  const [food, setFood] = useState({ x: 15, y: 15 }); // Food initial position
  const [direction, setDirection] = useState({ x: 1, y: 0 }); // Movement direction
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gridSize = 20; // Size of each grid in the game

  const [mattImg, setMattImg] = useState(null);
  const [wpEngineIcon, setWpEngineIcon] = useState(null);

  // Load images only when on the client (after component mounts)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadImage = (src) => {
        const img = new Image();
        img.src = src;
        return img;
      };

      setMattImg(loadImage("/images/matt.png"));
      setWpEngineIcon(loadImage("/images/wp-engine.svg"));
    }
  }, []);

  const handleKeyDown = (e) => {
    if (!gameOver) {
      if (e.key === "ArrowUp" && direction.y === 0)
        setDirection({ x: 0, y: -1 });
      if (e.key === "ArrowDown" && direction.y === 0)
        setDirection({ x: 0, y: 1 });
      if (e.key === "ArrowLeft" && direction.x === 0)
        setDirection({ x: -1, y: 0 });
      if (e.key === "ArrowRight" && direction.x === 0)
        setDirection({ x: 1, y: 0 });
    }
  };

  const updateGame = () => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Allow snake to get closer to the wall before game over
    const wallPadding = 1;
    if (
      head.x < wallPadding ||
      head.y < wallPadding ||
      head.x >= canvasRef.current.width / gridSize - wallPadding ||
      head.y >= canvasRef.current.height / gridSize - wallPadding
    ) {
      setGameOver(true);
      return;
    }

    // Check for self collision
    for (let i = 1; i < newSnake.length; i++) {
      if (newSnake[i].x === head.x && newSnake[i].y === head.y) {
        setGameOver(true);
        return;
      }
    }

    newSnake.unshift(head);

    // Check if snake eats the food
    if (head.x === food.x && head.y === food.y) {
      setScore(score + 1);
      setFood({
        x: Math.floor(Math.random() * (canvasRef.current.width / gridSize)),
        y: Math.floor(Math.random() * (canvasRef.current.height / gridSize)),
      });
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const drawGame = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    ctx.fillStyle = "#282c34";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Draw food
    if (playingWith === "matt" && wpEngineIcon) {
      ctx.drawImage(
        wpEngineIcon,
        food.x * gridSize,
        food.y * gridSize,
        gridSize,
        gridSize
      );
    } else if (mattImg) {
      ctx.drawImage(
        mattImg,
        food.x * gridSize,
        food.y * gridSize,
        gridSize,
        gridSize
      );
    }

    snake.forEach((segment) => {
      if (playingWith === "matt" && mattImg) {
        ctx.drawImage(
          mattImg,
          segment.x * gridSize,
          segment.y * gridSize,
          gridSize,
          gridSize
        );
      } else if (wpEngineIcon) {
        ctx.drawImage(
          wpEngineIcon,
          segment.x * gridSize,
          segment.y * gridSize,
          gridSize,
          gridSize
        );
      }
    });

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 20);
  };

  useEffect(() => {
    if (!playingWith) return;

    const interval = setInterval(() => {
      updateGame();
      drawGame();
    }, 150);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playingWith, snake, food, direction, mattImg, wpEngineIcon]);

  const startGame = (mode) => {
    setPlayingWith(mode);
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection({ x: 1, y: 0 });
    setGameOver(false);
    setScore(0);
  };

  const shareScore = () => {
    const shareText = `I just scored ${score} points in Matt vs WP Engine Snake game! Try it at https://www.fixdemonium.com/games/snake!`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}`;
    window.open(shareUrl, "_blank");
  };

  const handleTouch = (dir) => {
    if (dir === "up" && direction.y === 0) setDirection({ x: 0, y: -1 });
    if (dir === "down" && direction.y === 0) setDirection({ x: 0, y: 1 });
    if (dir === "left" && direction.x === 0) setDirection({ x: -1, y: 0 });
    if (dir === "right" && direction.x === 0) setDirection({ x: 1, y: 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Game Over!</h1>
            <p className="text-lg text-gray-300 mb-6">Your Score: {score}</p>
            <button
              onClick={() => startGame(playingWith)}
              className="bg-blue-500 px-6 py-3 rounded text-white font-semibold mb-4"
            >
              Start New Game
            </button>
            <button
              onClick={shareScore}
              className="bg-green-500 px-6 py-3 rounded text-white flex items-center justify-center"
            >
              <i className="fab fa-x-twitter mr-2"></i> Share on X
            </button>
          </div>
        </div>
      )}
      {!playingWith && (
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => startGame("matt")}
            className="bg-blue-500 px-4 py-2 rounded text-white flex items-center"
          >
            Play with Matt
            <img src="/images/matt.png" alt="Matt" className="w-6 h-6 ml-2" />
          </button>
          <button
            onClick={() => startGame("wp-engine")}
            className="bg-green-500 px-4 py-2 rounded text-white flex items-center"
          >
            Play with WP Engine
            <img
              src="/images/wp-engine.svg"
              alt="WP Engine"
              className="w-6 h-6 ml-2"
            />
          </button>
        </div>
      )}
      <canvas
        ref={canvasRef}
        width="400"
        height="400"
        className="border-4 border-white mb-4"
      ></canvas>
      {playingWith && (
        <div className="fixed bottom-0 left-0 w-full grid grid-cols-3 gap-4 p-4 bg-gray-800">
          <button
            onClick={() => handleTouch("left")}
            className="bg-gray-700 p-4 rounded flex justify-center items-center"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <button
            onClick={() => handleTouch("up")}
            className="bg-gray-700 p-4 rounded flex justify-center items-center"
          >
            <i className="fas fa-arrow-up"></i>
          </button>

          <button
            onClick={() => handleTouch("right")}
            className="bg-gray-700 p-4 rounded flex justify-center items-center"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
          <button
            onClick={() => handleTouch("down")}
            className="bg-gray-700 p-4 rounded flex justify-center items-center col-span-3"
          >
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>
      )}
    </div>
  );
}
